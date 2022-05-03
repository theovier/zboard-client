import axios from 'axios';

axios.defaults.withCredentials = true

const CSRF_ENDPOINT = "sanctum/csrf-cookie"

//todo extract this into config file
const API_URL = import.meta.env.VITE_API_URL
const API_PORT = import.meta.env.VITE_API_PORT

function grabCSRFCookie() {
    return axios.get(`${API_URL}:${API_PORT}/${CSRF_ENDPOINT}`)
}

function authenticate(email: string, password: string) {
    return axios
        .post("http://localhost:80/api/login", {
            email: email,
            password: password,
        })
        .catch((error: any) => console.error(error));
}

function getOwnUser() {
    return axios
        .get(`${API_URL}:${API_PORT}/api/user`)
        .catch((error: any) => console.error(error));
}

export default {
    login(email: string, password: string) {
        return grabCSRFCookie()
            .then(() => {
                return authenticate(email, password)
            })
    },
    getOwnUser() {
        return getOwnUser();
    }
}
