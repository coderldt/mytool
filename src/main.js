import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { registerCom } from './components/baseAssembly/index'

createApp(App).use(ElementPlus).use(registerCom).use(store).use(router).mount('#app')
