<template>
	<container>
		<div>Post {{ $route.params.id }}</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import { onUpdated } from "vue";

onUpdated(() => {
	changeBackgroundColor();
});

function changeBackgroundColor() {
	document.body.classList.replace("bg-white", "bg-sky-100");
}
</script>
