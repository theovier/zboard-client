<template>
	<div class="flex items-center space-x-4">
		<img
			v-if="img"
			id="profile-picture"
			class="h-14 w-14 select-none rounded-full object-cover"
			loading="lazy"
			:src="img"
			alt="Profile Picture"
		/>
		<img
			v-else
			id="profile-picture"
			class="h-8 w-8 select-none rounded-full object-cover"
			src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735"
			alt="Profile Picture"
		/>
		<div class="flex-auto">
			<div class="font-semibold text-slate-900">
				{{ name }}
			</div>
			<div class="mt-0.5 text-slate-500">
				{{ company }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	name: { type: String, required: true },
	img: { type: String, default: null },
	company: { type: String, default: "Universität Paderborn" },
});
</script>
