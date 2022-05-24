<template>
	<div class="relative p-10">
		<div class="fixed top-0 left-0 -z-10 h-full w-full bg-hero-bubbles" />
		<div
			v-if="!isLoading"
			class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 4k:grid-cols-8 4k:gap-12"
		>
			<post-create-card />
			<card class="h-64" :post="post" v-for="post in posts" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Card from "@/components/posts/Card.vue";
import PostCreateCard from "@/components/posts/PostCreateCard.vue";
import { onMounted, ref } from "vue";
import PostService from "../network/services/post";
import { AxiosResponse } from "axios";
import { Post } from "../types";
import echo from "../network/echo";

const postService = new PostService();
const posts = ref<Post[]>([]);

const isLoading = ref(true);

onMounted(() => {
	echo.channel("posts").listen("Hello", (e: any) => {
		console.log(e);
	});

	postService
		.getAll()
		.then((response: AxiosResponse<Post[]>) => {
			posts.value = response.data;
		})
		.finally(() => {
			isLoading.value = false;
		});
});
</script>
