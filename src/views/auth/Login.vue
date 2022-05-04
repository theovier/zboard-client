<template>
	<container>
		<div>
			<button @click="login">Login</button>
		</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
import router from "../../router";
import { onMounted } from "vue";
import { useAuthStore } from "../../store";

const store = useAuthStore();

function login() {
	store
		.login("admin@example.com", "password")
		.then(() => router.push({ name: "playground" }));
}

onMounted(() => {
	store.isLoggedIn().then(() => router.push({ name: "playground" }));
});
</script>
