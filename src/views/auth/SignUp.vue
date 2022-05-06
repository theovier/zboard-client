<template>
	<container>
		<wizard-steps-bar />

		<form @submit.prevent="onNextStep">
			<div class="mt-10">
				<h1
					class="mt-6 text-center text-3xl font-extrabold tracking-tighter text-gray-900"
				>
					Z-Board
				</h1>
				<h2
					class="mt-2 text-center text-lg font-medium tracking-tighter text-gray-600"
				>
					Create a free account to stay connected with your peers.
				</h2>
			</div>
			<div class="mt-8 flex justify-center">
				<div
					class="relative w-full max-w-md rounded-lg border border-gray-200 bg-gray-50 p-4 pt-4 pb-8 shadow-lg sm:px-10"
				>
					<h2 class="my-4 text-xl font-medium">Sign Up</h2>
					<div class="rounded-md shadow-sm">
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

					<div class="mt-4 text-center">
						<p class="text-sm">
							Already have account?
							<a href="#" class="text-blue-600 hover:underline">
								Log in.</a
							>
						</p>
					</div>
				</div>
			</div>
		</form>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import { computed, ref } from "vue";
import WizardStepsBar from "../../components/WizardSteps/WizardStepsBar.vue";

const email = ref("");
const password = ref("");
const passwordFieldType = ref("password");

const isPasswordVisible = computed(() => {
	return passwordFieldType.value === "text";
});

function togglePassword() {
	passwordFieldType.value = isPasswordVisible.value ? "password" : "text";
}

function onNextStep() {}
</script>
