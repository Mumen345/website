import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import axios from 'axios';
import Toaster from "@meforma/vue-toaster";

createApp(App).use(router,axios, Toaster).mount('#app')
