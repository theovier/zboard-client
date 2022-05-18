<template>
	<div class="relative">
		<label class="input-label" :for="id">{{ label }}</label>
		<textarea
			:id="id"
			v-model="value"
			:rows="rows"
			:autofocus="autofocus"
			class="input-text w-full"
		/>
		<div v-show="hasError" class="mt-2 px-1 font-medium text-red-600">
			{{ firstErrorMessage }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";

const props = defineProps({
	label: { type: String, required: true },
	rows: { type: Number, default: 5 },
	placeholder: { type: String, default: "" },
	disabled: { type: Boolean, default: false },
	readonly: { type: Boolean, default: false },
	autofocus: { type: Boolean, default: false },
	modelValue: { type: String, default: "" }, //"modelValue" is used by vue to update v-models
	validation: { type: Object, default: null },
});
const emit = defineEmits(["update:modelValue"]);

onMounted(() => {});

const id = computed(() => {
	return props.label.toLowerCase();
});

const value = computed({
	get(): string {
		return props.modelValue;
	},
	set(value: string): void {
		//props.validation.$touch(); //emulating https://vuelidate-next.netlify.app/guide.html#using-the-model-property
		emit("update:modelValue", value);
	},
});

const hasError = computed(() => {
	if (!props.validation) {
		return false;
	}
	return props.validation.$error;
});

const hasNoError = computed(() => {
	return !hasError.value;
});

//todo extract into own headless component
const firstErrorMessage = computed(() => {
	if (hasNoError.value) {
		return;
	}
	const error = props.validation.$errors[0];
	const validator = error.$validator;

	switch (validator) {
		case "required":
			return "This field cannot be empty";
		default:
			return error.$message;
	}
});
</script>
