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

function signup(data: SignUpData) {
	return axiosClient.post(`/signup`, data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
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
		return grabCSRFCookie()
			.then(() => {
				return login(email, password);
			})
			.then(() => {
				return getOwnUser();
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
