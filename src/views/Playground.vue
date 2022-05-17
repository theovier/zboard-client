<template>
	<container>
		<div>hi, {{ name }}!</div>
		<button class="btn-secondary" @click="logout">log out</button>

		<div class="grid gap-6 xl:grid-cols-5">
			<card class="h-56 bg-lime-100" v-for="i in 5" />
			<card class="col-span-2 row-span-2 bg-red-100" />
			<card class="h-56 bg-slate-800" v-for="i in 5" />

			<card v-for="i in 3" class="h-56 bg-green-100" />
			<card class="row-span-2 bg-amber-100" />
			<card v-for="i in 3" class="h-56 bg-fuchsia-100" />
		</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import Card from "@/components/posts/Card.vue";
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
