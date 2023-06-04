import './assets/main.css'
import '@/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)
app.use(ElementPlus)


