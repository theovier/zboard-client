<template>
	<container>
		<form @submit.prevent="next">
			<div class="mt-4 flex justify-center">
				<div class="relative w-full max-w-md p-4 pt-4 pb-8 sm:px-10">
					<h2 class="my-4 text-xl font-medium">Sign Up</h2>
					<div class="space-y-6">
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
						<button id="next" type="submit" class="btn w-24">
							Finish
						</button>
					</div>
				</div>
			</div>
		</form>
		<link-to-login />
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import CustomInput from "@/components/input/CustomInput.vue";
import LinkToLogin from "@/components/auth/LoginLink.vue";
import { computed, onMounted, ref } from "vue";
import router from "../../router";
import { useSignupStore } from "../../store/signup";
import { SignUpData } from "../../types";
import auth from "../../network/services/authentication";
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const store = useSignupStore();
const name = ref("");

onMounted(() => {
	//todo auto focus the first input programmatically
	store.currentStep = 2;
	name.value = store.name;
});

async function next() {
	const isFormCorrect = await $v.value.$validate();
	if (!isFormCorrect) {
		return;
	}

	const data: SignUpData = {
		email: store.email,
		password: store.password,
		name: store.name,
	};

	auth.signup(data)
		.then(() => {
			router.push({ name: "signupSuccess" });
		})
		.catch((error: any) => {
			console.log(error);
		});
}

function back() {
	store.name = name.value;
	router.back();
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
