import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './assets/styles/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .provide("axios", axios)
    .mount('#app');

axios.defaults.withCredentials = true