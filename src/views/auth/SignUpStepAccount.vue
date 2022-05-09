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
							:validation="$v.email"
						/>
						<custom-input
							v-model="password"
							label="Password"
							type="password"
							:validation="$v.password"
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

import {
	required,
	email as mail,
	minLength,
	helpers,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const store = useSignupStore();
const email = ref("");
const password = ref("");

onMounted(() => {
	store.currentStep = 1;
	email.value = store.email;
	password.value = store.password;
});

const trustedDomain = (email: String) => {
	const domain = emailDomain(email);
	if (domain === undefined) {
		return false;
	}
	const trusted = ["theovier.de", "example.com"]; //todo load them by GET request on mounted
	return trusted.includes(domain);
};

const emailDomain = (email: String) => {
	return email.split("@").pop();
};

const state = {
	email,
	password,
};

const rules = computed(() => {
	return {
		email: {
			required,
			mail,
			trustedDomain: helpers.withMessage(
				"Only addresses from theovier.de or example.com allowed",
				trustedDomain
			),
		},
		password: {
			required,
			minLength: minLength(8),
		},
	};
});

const $v = useVuelidate(rules, state, { $autoDirty: true });

async function next() {
	const isFormCorrect = await $v.value.$validate();
	if (isFormCorrect) {
		store.email = email.value;
		store.password = password.value;
		await router.push({ name: "signupStepPersonal" });
	}
}
</script>
