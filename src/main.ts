import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./assets/styles/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import FontAwesomeIcon from "./assets/fontawesome-icons";

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.use(createPinia().use(piniaPluginPersistedstate))
	.use(VueAxios, axios)
	.mount("#app");
