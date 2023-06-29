import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import menu from './components/Menu.vue';

const app = createApp(App)
app.use(router)
app.component("sildebarmenu", menu)
app.mount("#app-vue")
