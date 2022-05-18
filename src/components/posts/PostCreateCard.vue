<template>
	<card class="row-span-2" :post="post" route="post.create" />
</template>

<script setup lang="ts">
import { Post } from "../../types";
import Card from "@/components/posts/Card.vue";
import useSystemAuthor from "../../use/systemAuthor";

const post: Post = {
	id: 0,
	title: "Scan Me to Create a New Post",
	content: "you can also click on me in your browser.",
	author: useSystemAuthor(),
};
</script>
