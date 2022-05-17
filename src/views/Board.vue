<template>
	<container>
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
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import Card from "@/components/posts/Card.vue";
</script>
