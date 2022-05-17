<template>
	<container>
		<div class="m-20 space-y-4">
			<h1 style="font-size: 70px" class="font-bold text-slate-800">
				Oops!
			</h1>
			<div>
				<h2 class="max-w-md text-3xl text-slate-800">
					We could not find the page you're looking for.
				</h2>
			</div>
			<div>
				<div class="space-y-4 text-lg text-slate-600">
					<h3>Error Code: 404</h3>
					<h3>Here are some helpful links instead:</h3>
					<div class="space-y-2">
						<router-link
							class="block text-blue-600 hover:underline"
							:to="{ name: 'playground' }"
						>
							The Board
						</router-link>
						<router-link
							class="block text-blue-600 hover:underline"
							:to="{ name: 'login' }"
						>
							The Log in Page
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</container>
</template>

<script lang="ts" setup>
import Container from "@/views/Container.vue";
</script>
