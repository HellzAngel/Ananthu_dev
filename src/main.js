import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
// import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App).mount('#app')
App.provide('axios', App.config.globalProperties.axios)  // provide 'axios'
App.use(VueAxios, axios)