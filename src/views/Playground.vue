<template>
	<container>
		<donut-chart
			title="Deployment"
			:hours1="50"
			:hours2="100"
			color1="text-lime-600"
		/>
	</container>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import Container from "@/views/Container.vue";
import DonutChart from "@/components/DonutChart.vue";

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
