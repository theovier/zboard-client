<template>
	<div
		class="mx-auto h-full max-w-screen-lg space-y-4 rounded-md bg-white px-8 py-4"
	>
		<div class="text-3xl font-semibold">Reply</div>

		<div class="space-y-5">
			<post-header
				v-if="me.company"
				:name="me.name"
				:img="me.profile_picture_url"
				:company="me.company.name"
			/>
			<post-header v-else :name="me.name" :img="me.profile_picture_url" />

			<form class="space-y-5" @submit.prevent="sendReply">
				<custom-text-area v-model="reply" label="Content" :rows="7" />
				<div class="mt-8 flex w-full justify-end space-x-4">
					<button
						id="cancel"
						class="btn-secondary w-32"
						@click="back"
					>
						Back
					</button>
					<button
						id="create"
						type="submit"
						class="btn w-32"
						:disabled="isRequestPending || hasNoInputEntered"
					>
						Reply
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
//todo extract similar components from PostCreate and ReplySection

import { Post } from "../../types";
import { computed, PropType } from "vue";
import CustomTextArea from "@/components/input/CustomTextArea.vue";
import PostHeader from "@/components/posts/PostHeader.vue";
import { ref } from "vue";
import { useAuthStore } from "../../store";
import router from "../../router";

defineProps({
	post: { type: Object as PropType<Post>, required: true },
});

const store = useAuthStore();
const me = store.getUser;
const isRequestPending = ref<boolean>(false);
const reply = ref<string>("");

const hasNoInputEntered = computed(() => {
	return reply.value === "";
});

function back() {
	router.back();
}

function sendReply() {}
</script>
