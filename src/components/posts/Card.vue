<template>
	<div class="rounded-md p-3" :class="randomBackgroundColor">
		{{ url }}
		<router-link :to="{ name: 'post', params: { id: 1 } }">
			<div class="flex h-full flex-col justify-between">
				<div class="space-y-4 text-sm">
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
								Lassmiranda De Sivillia
							</div>
							<div class="mt-0.5 text-slate-500">
								Universität Paderborn
							</div>
						</div>
					</div>
					<p class="line-clamp-4">
						<span class="font-semibold">Verkaufe Tiger:</span>
						5 Jahre alt, 178cm groß, orange-schwarz gestreift. Er
						ist ganz lieb und zutraulich. Er war der Tiger in
						Hangover &#128526;. Er isst hauptsächlich nervige
						Menschen, die nicht anklopfen.
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
import { computed } from "vue";
import router from "../../router";

const colors = [
	"bg-cyan-100",
	"bg-lime-100",
	"bg-amber-100",
	"bg-orange-100",
	"bg-emerald-100",
	"bg-sky-100",
	"bg-pink-100",
];

//todo: let the server set the color?
const randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)];

const relativePostURL = router.resolve({
	name: "post",
	params: { id: 1 },
});

const absolutePostURL = computed(() => {
	//see https://stackoverflow.com/questions/61153418/is-it-possible-to-get-full-url-including-origin-from-route-in-vuejs
	return new URL(relativePostURL.href, window.location.href).href;
});
</script>
