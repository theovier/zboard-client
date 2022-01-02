<template>
    <h1 class="text-2xl font-bold text-green-700 underline">{{ msg }}</h1>
</template>

<script setup lang="ts">
    defineProps<{ msg: string }>()
</script>