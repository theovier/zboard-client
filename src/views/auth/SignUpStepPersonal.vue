<template>
	<div>
		<form @submit.prevent="next">
			<div class="mt-4 flex justify-center">
				<div class="relative w-full max-w-md p-4 pt-4 pb-8 sm:px-10">
					<h2 class="my-4 text-xl font-medium">Sign Up</h2>
					<div class="space-y-6">
						<div class="space-y-4">
							<label class="input-label" for="photo"
								>Profile Picture</label
							>
							<div class="space-y-6">
								<div class="flex shrink-0 justify-center">
									<img
										id="photo"
										class="h-24 w-24 cursor-pointer rounded-full object-cover"
										:src="imageSrc"
										alt="Current profile photo"
										@click="fileUploadInput.click()"
									/>
								</div>

								<label class="block">
									<span class="sr-only"
										>Choose profile photo</span
									>
									<input
										ref="fileUploadInput"
										accept="image/*"
										type="file"
										class="file:bg-violet-50-50 block w-full text-sm text-slate-500 file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-orange-600 hover:file:bg-orange-600 hover:file:text-white"
										@change="onFileChanged($event)"
									/>
								</label>
							</div>
						</div>

						<custom-input
							v-model="name"
							label="Name"
							:validation="$v.name"
						/>
					</div>

					<div class="mt-8 flex w-full justify-end space-x-4">
						<button
							id="back"
							type="button"
							class="btn-secondary w-24"
							@click="back"
						>
							Back
						</button>
						<button
							id="next"
							type="submit"
							:disabled="isRequestPending"
							class="btn w-24"
						>
							Finish
						</button>
					</div>
				</div>
			</div>
		</form>
		<link-to-login />
	</div>
</template>

<script lang="ts" setup>
import CustomInput from "@/components/input/CustomInput.vue";
import LinkToLogin from "@/components/auth/LoginLink.vue";
import { computed, onMounted, ref } from "vue";
import router from "../../router";
import { useSignupStore } from "../../store/signup";
import { SignUpData } from "../../types";
import auth from "../../network/services/authentication";
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import defaultProfileImageURL from "../../assets/images/default-profile-unsplash.jpg";

const store = useSignupStore();
const isRequestPending = ref(false);
const name = ref("");
//todo show max image size

const fileUploadInput = ref();
const pictureFile = ref();
const defaultImageSrc = defaultProfileImageURL;
const imageSrc = ref(defaultImageSrc);

onMounted(async () => {
	//todo auto focus the first input programmatically
	store.currentStep = 2;
	name.value = store.name;
});

async function next() {
	const isFormCorrect = await $v.value.$validate();
	if (!isFormCorrect) {
		return;
	}
	store.name = name.value;

	const data: SignUpData = {
		email: store.email,
		password: store.password,
		name: store.name,
		picture: pictureFile.value,
	};

	isRequestPending.value = true;
	await auth.grabCSRFCookie();
	auth.signup(data)
		.then(() => {
			router.push({ name: "signupSuccess" });
		})
		.catch((error: any) => {
			console.log(error);
		})
		.finally(() => {
			isRequestPending.value = false;
		});
}

function back() {
	store.name = name.value;
	router.back();
}

//todo extract to upload-file component
function onFileChanged($event: Event) {
	const target = $event.target as HTMLInputElement;
	if (target && target.files && target.files[0]) {
		pictureFile.value = target.files[0];
		imageSrc.value = URL.createObjectURL(pictureFile.value);
	} else {
		imageSrc.value = defaultImageSrc;
	}
}

const state = {
	name,
};

const alphaNumAndSpaceValidator = helpers.regex(/^[a-z\d-_]*$/i);

const rules = computed(() => {
	return {
		name: {
			required,
			alphaNumAndDotValidator: helpers.withMessage(
				"The name must only contain letters, numbers, dashes and underscores",
				alphaNumAndSpaceValidator
			),
		},
	};
});

const $v = useVuelidate(rules, state, { $autoDirty: true });
</script>
