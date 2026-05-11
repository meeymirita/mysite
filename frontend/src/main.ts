import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from "@/routes/routes";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Toast);
app.mount('#mirita');

