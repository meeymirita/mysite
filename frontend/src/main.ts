import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import axios from "axios";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(axios);
app.mount('#app');