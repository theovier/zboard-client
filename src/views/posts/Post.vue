<template>
	<div v-if="!isLoading" class="mx-auto max-w-screen-md space-y-12">
		<div
			class="min-h-[400px] space-y-6 rounded-md p-3 px-8 py-4"
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

				<div class="">
					{{ post.content }}
				</div>
			</div>
		</div>
		<comment-section
			v-if="me.id !== post.author.id"
			:post="post"
			:class="randomBackgroundColor"
		/>
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
import CommentSection from "@/components/posts/CommentSection.vue";
import { useAuthStore } from "../../store";

const isLoading = ref(true);
const postService = new PostService();
const post = ref<Post>();
const route = useRoute();
const id = Number(route.params.id);
const store = useAuthStore();
const me = store.getUser;

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
