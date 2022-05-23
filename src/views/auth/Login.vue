<template>
	<container>
		<form @submit.prevent="login">
			<div class="mt-20">
				<h1
					class="mt-6 text-center text-3xl font-extrabold tracking-tighter text-gray-900"
				>
					Z-Board
				</h1>
				<h2
					class="mt-2 text-center text-lg font-medium tracking-tighter text-gray-600"
				>
					Stay Connected
				</h2>
			</div>
			<div
				class="relative mt-6 mb-4 flex items-center justify-center"
				:class="{ invisible: !hasError }"
			>
				<span
					class="flex w-full max-w-md items-center justify-between rounded-md border border-red-400 bg-red-100 py-3.5 px-6 align-middle text-sm tracking-wide text-gray-800"
				>
					{{ errorText }}
					<font-awesome-icon
						icon="xmark"
						class="ml-2 cursor-pointer text-red-400"
						size="lg"
						@click="resetError"
					/>
				</span>
			</div>
			<div class="flex justify-center">
				<div class="relative w-full max-w-md p-4 pt-4 pb-8 sm:px-10">
					<h2 class="my-4 text-xl font-medium">Log In</h2>
					<div class="">
						<div class="">
							<label class="input-label">Email</label>
							<input
								id="email"
								v-model="email"
								autofocus
								type="text"
								:class="{ 'input-error': hasError }"
								class="input-text w-full"
								@input="resetError"
							/>
						</div>
						<div class="relative mt-6">
							<label class="input-label">Password</label>

							<font-awesome-icon
								v-if="isPasswordVisible"
								icon="eye-slash"
								class="fas absolute right-0 z-20 mt-3.5 mr-4 cursor-pointer text-gray-500"
								@click="togglePassword"
							/>

							<font-awesome-icon
								v-else
								icon="eye"
								class="fas absolute right-0 z-20 mt-3.5 mr-4 cursor-pointer text-gray-500"
								@click="togglePassword"
							/>

							<input
								id="password"
								v-model="password"
								:type="passwordFieldType"
								:class="{ 'input-error': hasError }"
								class="input-text w-full"
								@input="resetError"
							/>
						</div>
					</div>

					<div class="mt-8">
						<button
							id="login"
							type="submit"
							class="btn w-full"
							:disabled="hasNoInputEntered || isTryingToLogin"
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</form>
		<div class="text-center text-sm text-slate-500">
			Don't have an account?
			<router-link
				class="text-blue-600 hover:underline"
				:to="{ name: 'signup' }"
				>Sign up.</router-link
			>
		</div>
	</container>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref } from "vue";
import Container from "@/views/Container.vue";
import router from "../../router";
import { onMounted } from "vue";
import { useAuthStore } from "../../store";
import { useRoute } from "vue-router";

onMounted(() => {
	store
		.isStillLoggedIn()
		.then(() => {
			router.push({ name: "board" });
		})
		.catch(() => {
			//nothing
		});
});

const store = useAuthStore();
const email = ref("");
const password = ref("");
const passwordFieldType = ref("password");
const hasError = ref(false);
const isTryingToLogin = ref(false);
const errorText = ref("You have entered an invalid email or password.");

const hasNoInputEntered = computed(() => {
	return email.value === "" || password.value === "";
});

const isPasswordVisible = computed(() => {
	return passwordFieldType.value === "text";
});

function togglePassword() {
	passwordFieldType.value = isPasswordVisible.value ? "password" : "text";
}

function resetError() {
	hasError.value = false;
}

const route = useRoute();

function login() {
	isTryingToLogin.value = true;
	store
		.login(email.value, password.value)
		.then(() => {
			const redirect = route.query["redirect"];
			if (redirect !== undefined) {
				router.replace(`${redirect}`);
			} else {
				router.push({ name: "board" });
			}
		})
		.catch(() => {
			//as this is only a simple prototype, we assume that the credentials were invalid instead of something else could be gone wrong
			hasError.value = true;
		})
		.finally(() => {
			isTryingToLogin.value = false;
		});
}

onMounted(() => {
	changeBackgroundColor();
});

onUnmounted(() => {
	resetBackgroundColor();
});

function changeBackgroundColor() {
	document.body.classList.replace("bg-cyan-900", "bg-white");
}

function resetBackgroundColor() {
	document.body.classList.replace("bg-white", "bg-cyan-900");
}
</script>
