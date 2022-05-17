<template>
	<div class="relative p-10">
		<div class="fixed top-0 left-0 -z-10 h-full w-full bg-hero-bubbles" />
		<div
			class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
		>
			<card class="h-64" v-for="i in 4" />
			<card class="row-span-2" />
			<card class="col-span-2 row-span-2" />

			<card class="h-64" v-for="i in 3" />
			<card class="row-span-2" />
			<card class="h-64" v-for="i in 3" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Card from "@/components/posts/Card.vue";
import { onMounted } from "vue";

onMounted(() => {
	changeBackgroundColor();
});

function changeBackgroundColor() {
	document.body.classList.replace("bg-white", "bg-cyan-900");
}
</script>
