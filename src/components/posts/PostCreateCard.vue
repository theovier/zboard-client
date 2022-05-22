<template>
	<card class="row-span-2 min-h-[250px]" :post="post" route="post.create" />
</template>

<script setup lang="ts">
import { Post } from "../../types";
import Card from "@/components/posts/Card.vue";
import useSystemAuthor from "../../use/systemAuthor";

const post: Post = {
	id: 0,
	title: "Scan mich um einen neuen Post zu erstellen!",
	content:
		"Wenn Du die Seite über deinen Browser besuchst, kannst du auch auf mich klicken.",
	author: useSystemAuthor(),
};
</script>
