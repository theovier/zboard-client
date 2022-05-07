<template>
	<container>
		<form @submit.prevent="next">
			<div class="mt-4 flex justify-center">
				<div class="relative w-full max-w-md p-4 pt-4 pb-8 sm:px-10">
					<h2 class="my-4 text-xl font-medium">Sign Up</h2>
					<div class="">
						<div class="">
							<label class="input-label">Name</label>
							<input
								id="name"
								v-model="name"
								autofocus
								type="text"
								class="input-text w-full"
							/>
						</div>
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
		<div class="text-center text-sm">
			Already have account?
			<router-link
				class="text-blue-600 hover:underline"
				:to="{ name: 'login' }"
				>Log in.</router-link
			>
		</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import { onMounted, ref } from "vue";
import router from "../../router";
import { useSignupStore } from "../../store/signup";
import auth from "../../network/services/authentication";

const store = useSignupStore();
const name = ref("");

onMounted(() => {
	store.currentStep = 2;
	name.value = store.name;
});

function next() {
	store.name = name.value;
	store.email;
	store.password;

	auth.signup(store.email, store.password, store.name)
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
</script>
