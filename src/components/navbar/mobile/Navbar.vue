<template>
	<div class="bg-slate-500 p-4 text-slate-200">
		<div class="flex items-center justify-end">
			<button
				type="button"
				class="block hover:text-slate-300 focus:outline-none"
				@click="isOpen = !isOpen"
			>
				<svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
					<path
						v-if="isOpen"
						fill-rule="evenodd"
						d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
					/>
					<path
						v-else
						fill-rule="evenodd"
						d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
					/>
				</svg>
			</button>
		</div>

		<div
			:class="isOpen ? 'block' : 'hidden'"
			class="px-8 text-lg font-medium tracking-wide"
		>
			<div v-if="store.isAuthenticated" class="space-y-2">
				<div
					class="cursor-pointer rounded-sm px-2 hover:bg-slate-700"
					@click="logout"
				>
					Log Out
				</div>
			</div>

			<div v-else class="space-y-2">
				<router-link
					class="block cursor-pointer rounded-sm px-2 hover:bg-slate-700"
					:to="{ name: 'login' }"
				>
					Log In
				</router-link>
				<router-link
					class="block cursor-pointer rounded-sm px-2 hover:bg-slate-700"
					:to="{ name: 'signup' }"
				>
					Sign Up
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../../../store";
import { ref } from "vue";

const store = useAuthStore();

const isOpen = ref(false);

function logout() {
	store.logout();
}
</script>
