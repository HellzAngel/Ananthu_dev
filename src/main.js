import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes' 


createApp(App).use(router).mount('#app')
App.provide('axios', App.config.globalProperties.axios)  // provide 'axios'
App.use(VueAxios, axios)