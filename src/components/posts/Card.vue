<template>
	<div class="rounded-md p-3" :class="randomBackgroundColor">
		<router-link :to="{ name: route, params: { id: post.id } }">
			<div class="flex h-full flex-col justify-between">
				<div class="space-y-4 text-sm">
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
					<p class="line-clamp-4">
						<span class="font-semibold">{{ post.title }}</span>
						{{ post.content }}
					</p>
				</div>
				<div class="hidden justify-end md:flex">
					<qrcode
						:value="absolutePostURL"
						:size="70"
						foreground="#64748b"
						background="#ff000000"
					/>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script setup lang="ts">
import Qrcode from "qrcode.vue";
import router from "../../router";
import PostHeader from "@/components/posts/PostHeader.vue";
import useAbsoluteURL from "../../use/absoluteUrl";
import usePseudoRandomColor from "../../use/pseudoRandomColor";
import { Post } from "../../types";
import { PropType } from "vue";

const props = defineProps({
	post: { type: Object as PropType<Post>, required: true },
	route: { type: String, default: "post.show" },
});

const randomBackgroundColor = usePseudoRandomColor(props.post.id);

const relativePostURL = router.resolve({
	name: props.route,
	params: { id: props.post.id },
});
const absolutePostURL = useAbsoluteURL(relativePostURL);
</script>
