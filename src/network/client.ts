import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

export const axiosClient = axios.create({
	baseURL: `${API_URL}:${API_PORT}/api`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	withCredentials: true,
});
