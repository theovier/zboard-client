<template>
	<container>
		<form @submit.prevent="next">
			<div class="mt-4 flex justify-center">
				<div
					class="relative w-full max-w-md rounded-lg border-gray-200 p-4 pt-4 pb-8 sm:px-10"
				>
					<h2 class="my-4 text-xl font-medium">Sign Up</h2>
					<div class="">
						<div class="">
							<label class="input-label">Email</label>
							<input
								id="email"
								v-model="email"
								autofocus
								type="text"
								class="input-text w-full"
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
								class="input-text w-full"
							/>
						</div>
					</div>

					<div class="mt-8 flex w-full justify-end">
						<button id="login" type="submit" class="btn w-24">
							Next
						</button>
					</div>
				</div>
			</div>
		</form>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import { computed, onMounted, ref } from "vue";
import router from "../../router";
import { useSignupStore } from "../../store/signup";

const store = useSignupStore();
const email = ref("");
const password = ref("");
const passwordFieldType = ref("password");

onMounted(() => {
	store.currentStep = 1;
	email.value = store.email;
	password.value = store.password;
});

const isPasswordVisible = computed(() => {
	return passwordFieldType.value === "text";
});

function togglePassword() {
	passwordFieldType.value = isPasswordVisible.value ? "password" : "text";
}

function next() {
	store.email = email.value;
	store.password = password.value;
	router.push({ name: "signupStepPersonal" });
}
</script>
