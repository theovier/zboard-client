<template>
	<header
		v-if="!$route.meta.hideNavbar"
		class="hidden h-12 w-full items-center justify-end bg-slate-500 px-12 font-medium text-slate-200 sm:flex"
	>
		<div v-if="isAuthenticated" class="flex space-x-2">
			<div class="flex items-center space-x-6">
				<div class="flex items-center space-x-2">
					<img
						id="profile-picture"
						class="h-8 w-8 select-none rounded-full object-cover"
						loading="lazy"
						src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735"
						alt="Profile Picture"
					/>
					<div>My Username</div>
				</div>

				<div class="cursor-pointer" @click="logout">Log out</div>
			</div>
		</div>
		<div v-else>
			<router-link class="px-2 py-1" :to="{ name: 'login' }">
				Log In
			</router-link>
			<router-link class="px-2 py-1" :to="{ name: 'signup' }">
				Sign Up
			</router-link>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isAuthenticated = ref(true);

function logout() {}
</script>
