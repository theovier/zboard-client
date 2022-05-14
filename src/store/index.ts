import { defineStore } from "pinia";
import authService from "../network/services/authentication";

export const useAuthStore = defineStore("user", {
	state: () => {
		return {
			authenticated: false,
			user: null,
		};
	},
	getters: {
		isAuthenticated(state) {
			return state.authenticated;
		},
		getUser(state) {
			return state.user;
		},
	},
	actions: {
		onAuthentication(user: any) {
			this.authenticated = true;
			this.user = user;
		},
		login(email: string, password: string) {
			return authService.login(email, password).then((response: any) => {
				let user = response.data;
				this.onAuthentication(user);
			});
		},
		isStillLoggedIn() {
			//todo: check existence of cookie instead of trying to access protected api endpoints.
			return authService
				.getOwnUser()
				.then((response: any) => {
					let user = response.data;
					this.onAuthentication(user);
				})
				.catch(() => {});
		},
		logout() {
			return authService
				.logout()
				.catch(() => {})
				.finally(() => {
					this.$reset();
				});
		},
	},
});
