<template>
	<div class="flex">
		<step
			subtext="Account"
			:progress-percentage="1"
			:is-first="true"
			:is-current="store.currentStep === 1"
		>
			<lock-closed-icon class="m-auto h-6 w-6" />
		</step>

		<step
			subtext="Personal"
			:progress-percentage="store.currentStep >= 2 ? 1.0 : 0.0"
			:is-current="store.currentStep === 2"
		>
			<user-icon class="m-auto h-6 w-6" />
		</step>

		<step
			subtext="Finished"
			:progress-percentage="store.currentStep >= 3 ? 1.0 : 0.0"
			:is-current="store.currentStep === 3"
		>
			<check-circle-icon class="m-auto h-6 w-6" />
		</step>
	</div>
</template>

<script lang="ts" setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { UserIcon } from "@heroicons/vue/solid";
import { CheckCircleIcon } from "@heroicons/vue/outline";
import Step from "@/components/auth/Step.vue";
import { useSignupStore } from "../../store/signup";

const store = useSignupStore();
</script>
