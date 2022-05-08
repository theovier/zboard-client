<template>
	<container>
		<div>hi, {{ name }}!</div>
		<button class="btn-secondary" @click="logout">log out</button>
		<div class="grid grid-cols-4 grid-rows-5 gap-4">
			<card class="bg-lime-600" />
			<card v-for="i in 5" class="bg-blue-900" />
			<card class="col-span-2 row-span-3 bg-red-900" />
			<card v-for="i in 3" class="bg-green-900" />
			<card class="row-span-2 bg-amber-900" />
			<card v-for="i in 3" class="h-40 bg-fuchsia-900" />
		</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import Card from "@/components/Card.vue";
import { useAuthStore } from "../store";
import router from "../router";
const store = useAuthStore();

const user = store.getUser;
let name = "name";
if (user) {
	name = user["name"];
}

function logout() {
	store.logout().then(() => {
		router.push({ name: "login" });
	});
}
</script>
