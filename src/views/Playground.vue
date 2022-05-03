<template>
    <container>
        <div class="grid grid-rows-5 grid-cols-4 gap-4">
            <card class="bg-lime-600"/>
            <card class="bg-blue-900" v-for="i in 5"/>
            <card class="col-span-2 row-span-3 bg-red-900"/>
            <card class="bg-green-900" v-for="i in 3"/>
            <card class="row-span-2 bg-amber-900"/>
            <card class="h-40 bg-fuchsia-900" v-for="i in 3"/>
        </div>
    </container>
</template>

<script lang="ts" setup>
import Container from '@/views/Container.vue';
import Card from '@/components/Card.vue';
import {inject} from "vue";

    const axios: any = inject('axios')

    axios
        .get("http://localhost:80/sanctum/csrf-cookie")
        .then(() => {
            return axios.post("http://localhost:80/api/login", {
                email: "admin@example.com",
                password: "password",
            })
        })
        .then((response : any) => {
            console.log(response)
            return axios.get("http://localhost:80/api/user")
        })
        .then((response : any) => {
            console.log(response.data)
        });
</script>
