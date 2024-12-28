import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import './assets/font/index.css'
import { ue4, ue } from '@/utils/ue4-interface-script.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
window.ue4 = ue4
window.ue = {
  ...(window.ue || {}),
  ...ue
};
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router) 
app.use(pinia)
app.mount('#app')
