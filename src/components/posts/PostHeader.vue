<template>
	<div class="flex items-center space-x-4">
		<img
			id="profile-picture"
			class="h-14 w-14 select-none rounded-full object-cover"
			loading="lazy"
			:src="img"
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
	img: { type: String, default: "" },
	company: { type: String, default: "Universität Paderborn" },
});
</script>
