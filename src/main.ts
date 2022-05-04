import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/styles/index.css";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
	.use(router)
	.use(createPinia())
	.use(VueAxios, axios)
	.mount("#app");
