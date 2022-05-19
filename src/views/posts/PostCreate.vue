<template>
	<div
		class="mx-auto h-full max-w-screen-lg space-y-4 rounded-md bg-white px-8 py-4"
	>
		<div class="text-center text-3xl font-semibold">Create a New Post</div>

		<div class="space-y-5">
			<post-header
				v-if="user.company"
				:name="user.name"
				:img="user.profile_picture_url"
				:company="user.company.name"
			/>
			<post-header
				v-else
				:name="user.name"
				:img="user.profile_picture_url"
			/>
			<form class="space-y-5" @submit.prevent="create">
				<custom-input
					v-model="title"
					label="Title"
					:validation="$v.title"
				/>
				<custom-text-area
					v-model="content"
					:validation="$v.content"
					label="Content"
					:rows="10"
				/>
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
						:disabled="isRequestPending"
					>
						Create
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import PostService from "../../network/services/post";
import CustomInput from "@/components/input/CustomInput.vue";
import CustomTextArea from "@/components/input/CustomTextArea.vue";
import PostHeader from "@/components/posts/PostHeader.vue";
import { computed, ref } from "vue";
import { required, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { CreatePostRequest } from "../../types";
import { useAuthStore } from "../../store";
import router from "../../router";

const isRequestPending = ref<boolean>(false);
const postService = new PostService();

const title = ref<string>("");
const content = ref<string>("");

const store = useAuthStore();
const user = store.getUser;

function back() {
	router.back();
}

async function create() {
	const isFormCorrect = await $v.value.$validate();
	if (!isFormCorrect) {
		return;
	}
	isRequestPending.value = true;

	const payload: CreatePostRequest = {
		title: title.value,
		content: content.value,
	};

	postService
		.store(payload)
		.then(() => {
			alert("Post created");
			//todo navigate back to board with success toast?
		})
		.finally(() => {
			isRequestPending.value = false;
		});
}

const state = {
	title,
	content,
};

const rules = computed(() => {
	return {
		title: {
			required,
			maxLengthValue: maxLength(150),
		},
		content: {
			maxLengthValue: maxLength(65000),
		},
	};
});

const $v = useVuelidate(rules, state, { $autoDirty: true });
</script>
