<template>
	<div class="rounded-md p-3" :class="randomBackgroundColor">
		<router-link :to="{ name: route, params: { id: post.id } }">
			<div class="flex h-full flex-col justify-between">
				<div class="space-y-4 text-sm">
					<div class="flex items-center space-x-4">
						<img
							id="profile-picture"
							class="h-14 w-14 select-none rounded-full object-cover"
							loading="lazy"
							:src="imageSource"
							alt="Profile Picture"
						/>
						<div class="flex-auto">
							<div class="font-semibold text-slate-900">
								{{ post.author.name }}
							</div>
							<div class="mt-0.5 text-slate-500">
								{{ companyName }}
							</div>
						</div>
					</div>
					<p class="line-clamp-4">
						<span class="font-semibold">{{ post.title }}:</span>
						{{ post.content }}
					</p>
				</div>
				<div class="flex justify-end">
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
import useAbsoluteURL from "../../use/absoluteUrl";
import usePseudoRandomColor from "../../use/pseudoRandomColor";
import { Post } from "../../types";
import { PropType } from "vue";

const props = defineProps({
	post: { type: Object as PropType<Post>, required: true },
	link: { type: String, default: null }, //use to overwrite the default qr code link
	route: { type: String, default: "post.show" },
});

const randomBackgroundColor = usePseudoRandomColor(props.post.id);

const companyName =
	props.post.author.company !== undefined
		? props.post.author.company.name
		: "Universität Paderborn";

const imageSource =
	props.post.author.avatar_url !== undefined
		? props.post.author.avatar_url
		: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80";

const relativePostURL = router.resolve({
	name: props.route,
	params: { id: props.post.id },
});
const absolutePostURL = useAbsoluteURL(relativePostURL);
</script>
