import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", {
	state: () => {
		return {
			currentStep: 1,
			email: "",
			password: "",
			name: "",
		};
	},
	getters: {
		getCurrentStep(state) {
			return state.currentStep;
		},
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
});
