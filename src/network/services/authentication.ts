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
};
