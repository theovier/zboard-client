import { defineStore } from "pinia";
import authService from "../services/authentication";

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
			return authService
				.login(email, password)
				.then(() => {
					return authService.getOwnUser();
				})
				.then((response: any) => {
					let user = response.data;
					this.onAuthentication(user);
				})
				.catch((error: any) => {
					console.error(error);
					this.logout();
				});
		},
		logout() {
			//todo: log out on server as well
			this.authenticated = false;
			this.user = null;
		},
		async isLoggedIn() {
			let success = false;
			if (this.isAuthenticated) {
				return true;
			}
			await authService
				.getOwnUser()
				.then((response: any) => {
					success = true;
					let user = response.data;
					this.onAuthentication(user);
				})
				.catch(() => {
					success = false;
					this.logout();
				});
			return success;
		},
	},
});
