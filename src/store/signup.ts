import { defineStore } from "pinia";

interface SignupState {
	currentStep: Number;
	email: string;
	password: string;
	name: string;
	picture: string | ArrayBuffer | null;
}

export const useSignupStore = defineStore("signup", {
	state: (): SignupState => ({
		currentStep: 1,
		email: "",
		password: "",
		name: "",
		picture: null,
	}),

	getters: {
		getEmail(state) {
			return state.email;
		},
		getPassword(state) {
			return state.password;
		},
		getName(state) {
			return state.name;
		},
		hasPictureStored(state) {
			return state.picture !== null;
		},
	},
	actions: {},
	persist: true,
});
