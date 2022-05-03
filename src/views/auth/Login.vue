<template>
    <container>
        <div>
            <button @click="login">Login</button>
        </div>
    </container>
</template>

<script lang="ts" setup>
import Container from '@/views/Container.vue';
import AuthService from "../../services/AuthenticationService";
import router from "../../router";

function login() {
    //todo: check at startup if still logged in -> if so, skip this view.
    //todo check store if authenticated.

    AuthService
        .login("admin@example.com", "password")
        .then(() => AuthService.getOwnUser())
        .then((response: any) => console.log(response))
        .then(() => router.push({name: "playground"}))
}
</script>
