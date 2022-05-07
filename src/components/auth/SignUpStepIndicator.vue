<template>
	<div class="flex">
		<step subtext="Account" :progress-percentage="1" :is-first="true">
			<template #icon>
				<lock-closed-icon class="m-auto h-6 w-6" />
			</template>
		</step>

		<step subtext="Personal" :progress-percentage="1" :is-current="true">
			<template #icon>
				<user-icon class="m-auto h-6 w-6" />
			</template>
		</step>

		<step subtext="Finished" :progress-percentage="0">
			<template #icon>
				<check-circle-icon class="m-auto h-6 w-6" />
			</template>
		</step>
	</div>
</template>

<script lang="ts" setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { UserIcon } from "@heroicons/vue/solid";
import { CheckCircleIcon } from "@heroicons/vue/outline";
import Step from "@/components/auth/Step.vue";
</script>
