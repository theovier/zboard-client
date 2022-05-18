<template>
	<div>
		<div class="fixed top-0 left-0 -z-10 h-full w-full bg-hero-bubbles" />
		<container class="p-3">
			<div
				v-if="!isLoading"
				class="mx-auto h-full max-w-screen-lg rounded-md p-3"
				:class="randomBackgroundColor"
			>
				<div class="flex items-center space-x-4">
					<img
						id="profile-picture"
						class="h-14 w-14 select-none rounded-full object-cover"
						loading="lazy"
						src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
						alt="Profile Picture"
					/>
					<div class="flex-auto">
						<div class="font-semibold text-slate-900">
							{{ post.author.name }}
						</div>
						<div class="mt-0.5 text-slate-500">
							Universität Paderborn
						</div>
					</div>
				</div>

				<div class="text-3xl font-semibold">
					{{ post.title }}
				</div>

				<div class="max-w-screen-sm">
					{{ post.content }}
				</div>
			</div>
		</container>
	</div>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import PostService from "../../network/services/post";
import { AxiosResponse } from "axios";
import { Post } from "../../types";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import usePseudoRandomColor from "../../use/pseudoRandomColor";

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
