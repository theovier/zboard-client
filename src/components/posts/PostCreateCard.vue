<template>
	<card
		class="row-span-2"
		:post="post"
		:link="absoluteURL"
		route="post.create"
	/>
</template>

<script setup lang="ts">
import router from "../../router";
import useAbsoluteURL from "../../use/absoluteUrl";
import { Post, Author, Company } from "../../types";
import Card from "@/components/posts/Card.vue";

//todo extract company, author and post
const company: Company = {
	id: 0,
	name: "System",
};

const author: Author = {
	id: 0,
	name: "Post Bot",
	avatar_url:
		"https://images.unsplash.com/photo-1546776310-eef45dd6d63c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110",
	company: company,
};

const post: Post = {
	id: 0,
	title: "Scan Me to Create a New Post",
	content: "you can also click on me in your browser.",
	author: author,
};

const relativeURL = router.resolve({
	name: "post.create",
});

const absoluteURL = useAbsoluteURL(relativeURL);
</script>
