<template>
	<container>
		<div class="mt-4 flex justify-center">
			<div
				class="relative w-full max-w-md rounded-lg border-gray-200 p-4 pt-4 pb-8 sm:px-10"
			>
				<h2 class="my-4 text-xl font-medium">
					&#127881; Sign Up Successful
				</h2>
				<div class="">
					Welcome, <span class="font-medium">{{ name }}</span
					>! We have sent you an email to
					<span class="font-medium">{{ email }}</span> with a link to
					finish up your registration.
				</div>
			</div>
		</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import { onMounted, ref } from "vue";
import { useSignupStore } from "../../store/signup";

const store = useSignupStore();

const email = ref("");
const name = ref("");

onMounted(() => {
	store.currentStep = 3;
	email.value = store.email;
	name.value = store.name;
});
</script>
