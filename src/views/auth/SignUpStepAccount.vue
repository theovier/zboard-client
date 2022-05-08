<template>
	<container>
		<form @submit.prevent="next">
			<div class="mt-4 flex justify-center">
				<div class="relative w-full max-w-md p-4 pt-4 pb-8 sm:px-10">
					<h2 class="my-4 text-xl font-medium">Sign Up</h2>
					<div class="space-y-6">
						<custom-input
							v-model="email"
							label="Email"
							:autofocus="true"
						/>
						<custom-input
							v-model="password"
							label="Password"
							type="password"
						/>
					</div>
					<div class="mt-8 flex w-full justify-end">
						<button id="login" type="submit" class="btn w-24">
							Next
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
import CustomInput from "@/components/input/CustomInput.vue";
import { onMounted, ref } from "vue";
import router from "../../router";
import { useSignupStore } from "../../store/signup";

import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const store = useSignupStore();
const email = ref("");
const password = ref("");

onMounted(() => {
	store.currentStep = 1;
	email.value = store.email;
	password.value = store.password;
});

const state = {
	email,
	password,
};

const rules = {
	email: { required },
	password: { required },
};

const $v = useVuelidate(rules, state);

async function next() {
	const isFormCorrect = await $v.value.$validate();
	if (isFormCorrect) {
		console.log("correct");
	} else {
		console.log("validation error");
		return;
	}

	store.email = email.value;
	store.password = password.value;
	await router.push({ name: "signupStepPersonal" });
}
</script>
