<template>
	<header v-if="!$route.meta.hideNavbar">
		<desktop-navbar class="hidden sm:flex" />
		<mobile-navbar class="sm:hidden" />
	</header>
</template>

<script lang="ts" setup>
import DesktopNavbar from "@/components/navbar/desktop/Navbar.vue";
import MobileNavbar from "@/components/navbar/mobile/Navbar.vue";
</script>
