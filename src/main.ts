import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./assets/styles/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import FontAwesomeIcon from "./assets/fontawesome-icons";

import Echo from "laravel-echo";
import Pusher from "pusher-js";

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.use(createPinia().use(piniaPluginPersistedstate))
	.use(VueAxios, axios)
	.mount("#app");

//todo move into own file
declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		Pusher: any;
		Echo: any;
	}
}
const PUSHER_HOST = import.meta.env.VITE_PUSHER_HOST;
const PUSHER_PORT = import.meta.env.VITE_PUSHER_PORT;
const PUSHER_APP_KEY = import.meta.env.VITE_PUSHER_APP_KEY;

window.Pusher = Pusher;
window.Echo = new Echo({
	broadcaster: "pusher",
	key: PUSHER_APP_KEY,
	wsHost: PUSHER_HOST,
	wsPort: PUSHER_PORT,
	forceTLS: false,
	encrypted: true,
	disableStats: true,
	enabledTransports: ["ws", "wss"],
});
