<template>
	<div class="montserrat h-full w-full max-w-md text-slate-700">
		<div class="text-center text-2xl uppercase text-slate-700">
			{{ title }}
		</div>

		<div class="flex items-center space-x-4">
			<svg viewBox="0 0 40 40" class="">
				<circle
					class="text-blue-400"
					cx="20"
					cy="20"
					r="15.91549430918954"
					stroke="currentColor"
					fill="transparent"
					stroke-width="4"
					:stroke-dasharray="lowcodeStrokeDashArray"
				/>
				<circle
					class="text-red-400"
					cx="20"
					cy="20"
					r="15.91549430918954"
					stroke="currentColor"
					fill="transparent"
					stroke-width="4"
					:stroke-dasharray="traditionalStrokeDashArray"
					:stroke-dashoffset="percentage2"
				/>
				<g class="chart-text montserrat text-slate-700">
					<text x="50%" y="50%" class="chart-number fill-current">
						{{ total }}
					</text>
					<text
						x="50%"
						y="50%"
						class="chart-label fill-current uppercase"
					>
						Hours
					</text>
				</g>
			</svg>
			<div class="mt-4 ml-8 w-full space-y-1">
				<div class="flex items-center space-x-3">
					<div class="h-4 w-4 rounded-full bg-blue-400" />
					<div class="font-medium">
						Low-Code <span>({{ hours1 }}h)</span>
					</div>
				</div>
				<div class="flex items-center space-x-3">
					<div class="h-4 w-4 rounded-full bg-red-400" />
					<div class="font-medium">
						Traditional <span>({{ hours2 }}h)</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
	title: { type: String, required: true },
	hours1: { type: Number, default: 25 },
	hours2: { type: Number, default: 50 },
});

const total = computed(() => {
	return props.hours1 + props.hours2;
});

const percentage1 = computed(() => {
	return Math.round((props.hours1 / total.value) * 100);
});

const percentage2 = computed(() => {
	return Math.round((props.hours2 / total.value) * 100);
});

const lowcodeStrokeDashArray = `${percentage1.value} ${percentage2.value}`;
const traditionalStrokeDashArray = `${percentage2.value} ${percentage1.value}`;
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400);

.montserrat {
	font: 16px/1.4em "Montserrat", Arial, sans-serif;
}

.chart-text {
	transform: translateY(0.25em);
}

.chart-number {
	font-size: 0.6em;
	text-anchor: middle;
	transform: translateY(-0.25em);
}

.chart-label {
	font-size: 0.2em;
	text-anchor: middle;
	transform: translateY(0.7em);
}
</style>
