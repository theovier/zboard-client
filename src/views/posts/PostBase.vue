<template>
	<div>
		<div class="fixed top-0 left-0 -z-10 h-full w-full bg-hero-bubbles" />
		<container class="p-3">
			<router-view />
		</container>
	</div>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
</script>
