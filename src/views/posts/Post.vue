<template>
	<container :class="randomBackgroundColor">
		<div>Post {{ id }}</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import PostService from "../../network/services/post";
import { AxiosResponse } from "axios";
import { Post } from "../../types";
import { ref } from "vue";
import { useRoute } from "vue-router";
import usePseudoRandomColor from "../../use/pseudoRandomColor";

const postService = new PostService();
const post = ref<Post>();
const route = useRoute();
const id = route.params.id;

postService.get(1).then((response: AxiosResponse<Post>) => {
	post.value = response.data;
});

const randomBackgroundColor = usePseudoRandomColor(1);
</script>
