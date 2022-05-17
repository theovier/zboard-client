<template>
	<container>
		<div
			class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
		>
			<card v-for="i in 4" class="h-64 bg-lime-100" />
			<card class="row-span-2 bg-cyan-100" />
			<card class="col-span-2 row-span-2 bg-red-100" />

			<card v-for="i in 3" class="h-64 bg-green-100" />
			<card class="row-span-2 bg-amber-100" />
			<card v-for="i in 3" class="h-64 bg-fuchsia-100" />
		</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import Card from "@/components/posts/Card.vue";
</script>
