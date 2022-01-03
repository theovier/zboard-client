<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts">
import Playground from './views/Playground.vue';

export default {
    name: "App",
    components: {
        Playground
    }
}
</script>