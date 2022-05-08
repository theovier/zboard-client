<template>
	<div>
		<label class="input-label" :for="id">{{ label }}</label>
		<input
			:id="id"
			v-model="value"
			:autofocus="autofocus"
			:type="currentType"
			class="input-text w-full"
		/>
	</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
	label: { type: String, required: true },
	placeholder: { type: String, default: "" },
	disabled: { type: Boolean, default: false },
	readonly: { type: Boolean, default: false },
	autofocus: { type: Boolean, default: false },
	type: { type: String, default: "text" },
	modelValue: { type: String, default: "" }, //"modelValue" is used by vue to update v-models
});
const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
	currentType.value = props.type;
});

let currentType = ref("text");

// const isPasswordVisible = computed(() => {
// 	return props.type === "password" && currentType.value === "text";
// });

const id = computed(() => {
	return props.label.toLowerCase();
});

const value = computed({
	get(): string {
		return props.modelValue;
	},
	set(value: string): void {
		emit("update:modelValue", value);
	},
});

// function togglePasswordVisibility() {
// 	currentType.value = isPasswordVisible.value ? "password" : "text";
// }
</script>
