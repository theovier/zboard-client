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

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		Pusher: any;
		Echo: any;
	}
}
window.Pusher = Pusher;
window.Echo = new Echo({
	broadcaster: "pusher",
	key: "local",
	cluster: "mt1",
	secret: "local",
	wsHost: "localhost",
	wsPort: 6001,
	forceTLS: false,
	encrypted: false,
	disableStats: true,
});
