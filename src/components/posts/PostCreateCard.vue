<template>
	<div class="h-64 rounded-md p-3" :class="randomBackgroundColor">
		<router-link :to="{ name: 'post.create' }">
			<div class="flex h-full flex-col justify-between">
				<div class="space-y-4 text-sm">
					<div class="flex items-center space-x-4">
						<img
							id="profile-picture"
							class="h-14 w-14 select-none rounded-full object-cover"
							loading="lazy"
							src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110"
							alt="Profile Picture"
						/>
						<div class="flex-auto">
							<div
								class="flex items-center space-x-2 font-semibold text-slate-900"
							>
								<div>
									{{ author }}
								</div>
								<div class="">&#129302;</div>
							</div>
							<div class="mt-0.5 text-slate-500">
								{{ company }}
							</div>
						</div>
					</div>
					<p class="line-clamp-4">
						<span class="font-semibold">{{ title }}</span>
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
import { ref } from "vue";

//todo simply reuse the card component and fill it with fake post data

const company = ref<string>("System");
const author = ref<string>("Post Bot");
const title = ref<string>("Scan Me to Create a New Post");

const relativePostURL = router.resolve({
	name: "post.create",
});

const absolutePostURL = useAbsoluteURL(relativePostURL);
const randomBackgroundColor = usePseudoRandomColor(12345);
</script>
