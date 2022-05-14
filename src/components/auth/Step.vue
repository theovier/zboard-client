<template>
	<div class="w-full">
		<div class="relative">
			<div
				v-if="!isFirst"
				class="align-center absolute flex content-center items-center align-middle"
				style="
					width: calc(100% - 2.5rem - 1rem);
					top: 50%;
					transform: translate(-50%, -50%);
				"
			>
				<div
					class="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle"
				>
					<div
						class="w-0 rounded bg-orange-400 py-1"
						:style="{ width: progress + '%' }"
					></div>
				</div>
			</div>

			<div
				class="mx-auto flex h-10 w-10 items-center rounded-full text-lg"
				:class="[
					isCompleted
						? 'bg-orange-500 text-white'
						: 'rounded-full border-2 border-gray-200 bg-white text-gray-500',
				]"
			>
				<slot />
			</div>
		</div>

		<div
			class="mt-2 text-center text-xs md:text-base"
			:class="[isCurrent ? 'font-bold' : 'font-medium']"
		>
			{{ subtext }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
	isFirst: { type: Boolean, default: false },
	isCurrent: { type: Boolean, default: false },
	subtext: { type: String, default: "" },
	progressPercentage: { type: Number, default: 0.0 },
});

const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

const progress = computed(() => {
	let width = props.progressPercentage * 100;
	return clamp(width, 0, 100);
});

const isCompleted = computed(() => {
	return progress.value === 100;
});
</script>
