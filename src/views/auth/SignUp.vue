<template>
	<container>
		<step-indicator class="py-6" />
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
		<router-view />
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import StepIndicator from "../../components/auth/SignUpStepIndicator.vue";
import { onMounted } from "vue";
import { useSignupStore } from "../../store/signup";

const store = useSignupStore();

onMounted(() => {
	store.$reset();
});
</script>
