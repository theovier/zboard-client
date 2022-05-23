<template>
	<header
		v-if="!$route.meta.hideNavbar"
		class="hidden h-12 w-full items-center justify-end bg-slate-500 px-12 text-slate-200 sm:flex"
	>
		<div v-if="store.isAuthenticated" class="flex items-center">
			<Menu as="div" class="relative">
				<MenuButton
					as="div"
					class="flex cursor-pointer items-center space-x-2"
				>
					<img
						id="profile-picture"
						class="h-8 w-8 select-none rounded-full object-cover"
						:src="store.getUser.profile_picture_url"
						alt="Profile Picture"
					/>
					<font-awesome-icon
						icon="caret-down"
						class="fas cursor-pointer"
					/>
				</MenuButton>
				<transition
					enter-active-class="transition duration-100 ease-out"
					enter-from-class="transform scale-95 opacity-0"
					enter-to-class="transform scale-100 opacity-100"
					leave-active-class="transition duration-75 ease-in"
					leave-from-class="transform scale-100 opacity-100"
					leave-to-class="transform scale-95 opacity-0"
				>
					<MenuItems
						class="absolute right-0 z-20 mt-2 min-w-[12rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<div class="p-2">
							<MenuItem>
								<div
									class="cursor-default p-2 font-normal text-gray-900"
								>
									Signed in as
									<span class="font-medium">{{
										store.getUser.name
									}}</span>
								</div>
							</MenuItem>
						</div>
						<MenuItem @click="logout">
							<div
								class="group flex w-full items-center px-4 py-2"
							>
								<button
									disabled
									class="group flex w-full items-center text-gray-900 opacity-50"
								>
									Settings
								</button>
							</div>
						</MenuItem>
						<MenuItem v-slot="{ active }" @click="logout">
							<div
								class="group flex w-full items-center px-4 py-2"
								:class="[
									active
										? 'bg-sky-500 text-white'
										: 'text-gray-900',
								]"
							>
								<button class="group flex w-full items-center">
									Log out
								</button>
							</div>
						</MenuItem>
					</MenuItems>
				</transition>
			</Menu>
		</div>
		<div v-else class="flex space-x-2 font-medium">
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
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useAuthStore } from "../../store";

const store = useAuthStore();

function logout() {
	store.logout();
}
</script>
