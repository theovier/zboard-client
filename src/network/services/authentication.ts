import { axiosClient } from "../client";
import { SignUpData } from "../../types";

function grabCSRFCookie() {
	return axiosClient.get(`/csrf-cookie`);
}

function login(email: string, password: string) {
	return axiosClient.post(`/login`, {
		email: email,
		password: password,
	});
}

function logout() {
	return axiosClient.post("/logout");
}

//todo create interface for the signup data
function signup(data: SignUpData) {
	return axiosClient.post(`/signup`, {
		email: data.email,
		password: data.password,
		name: data.name,
	});
}

function getOwnUser() {
	return axiosClient.get(`/user`);
}

export default {
	grabCSRFCookie() {
		return grabCSRFCookie();
	},
	login(email: string, password: string) {
		return grabCSRFCookie().then(() => {
			return login(email, password);
		});
	},
	logout() {
		return logout();
	},
	getOwnUser() {
		return getOwnUser();
	},
	signup(data: SignUpData) {
		return signup(data);
	},
};
