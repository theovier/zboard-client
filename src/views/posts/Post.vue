<template>
	<div
		v-if="!isLoading"
		class="mx-auto h-full max-w-screen-lg space-y-6 rounded-md p-3"
		:class="randomBackgroundColor"
	>
		<post-header
			v-if="post.author.company"
			:name="post.author.name"
			:img="post.author.profile_picture_url"
			:company="post.author.company.name"
		/>
		<post-header
			v-else
			:name="post.author.name"
			:img="post.author.profile_picture_url"
		/>

		<div class="space-y-2">
			<div class="text-3xl font-semibold">
				{{ post.title }}
			</div>

			<div class="max-w-screen-sm">
				{{ post.content }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import PostService from "../../network/services/post";
import { AxiosResponse } from "axios";
import { Post } from "../../types";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import usePseudoRandomColor from "../../use/pseudoRandomColor";
import PostHeader from "@/components/posts/PostHeader.vue";

const isLoading = ref(true);
const postService = new PostService();
const post = ref<Post>();
const route = useRoute();
const id = Number(route.params.id);

onMounted(() => {
	postService
		.get(id)
		.then((response: AxiosResponse<Post>) => {
			post.value = response.data;
		})
		.finally(() => {
			isLoading.value = false;
		});
});

const randomBackgroundColor = usePseudoRandomColor(id);
</script>
