<template>
	<div class="w-full">
		<div class="relative mb-2">
			<div
				class="mx-auto flex h-10 w-10 items-center rounded-full bg-orange-500 text-lg text-white"
			>
				<lock-closed-icon class="m-auto h-6 w-6" />
			</div>
		</div>
		<div class="text-center text-xs font-medium md:text-base">Account</div>
	</div>
</template>

<script lang="ts" setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
</script>
