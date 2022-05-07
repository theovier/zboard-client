import { axiosClient } from "../client";

function grabCSRFCookie() {
	return axiosClient.get(`/csrf-cookie`);
}

function login(email: string, password: string) {
	return axiosClient.post(`/login`, {
		email: email,
		password: password,
	});
}

//todo create interface for the signup data
function signup(email: string, password: string, name: string) {
	return axiosClient.post(`/signup`, {
		email: email,
		password: password,
		name: name,
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
	getOwnUser() {
		return getOwnUser();
	},
	signup(email: string, password: string, name: string) {
		return signup(email, password, name);
	},
};
