<template>
	<container>
		<div class="mt-4 flex justify-center">
			<div
				class="relative w-full max-w-md rounded-lg border-gray-200 p-4 pt-4 pb-8 sm:px-10"
			>
				<h2 class="my-4 text-xl font-medium">
					&#127881; Sign Up Completed
				</h2>
				<div class="">
					Your email address has been verified successfully. You can
					now log in with your credentials.
				</div>
				<div class="mt-8">
					<router-link class="btn" :to="{ name: 'login' }"
						>Log in here</router-link
					>
				</div>
			</div>
		</div>
	</container>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";

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
