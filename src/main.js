import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import Toasted from 'vue-toasted';



createApp(App).use(router,Toasted,).mount('#app')
