import { defineStore } from "pinia";

interface SignupState {
	currentStep: Number;
	email: string;
	password: string;
	name: string;
}

export const useSignupStore = defineStore("signup", {
	state: (): SignupState => ({
		currentStep: 1,
		email: "",
		password: "",
		name: "",
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
	},
	actions: {},
	persist: true,
});
