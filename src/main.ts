import { createApp } from 'vue'
import '@/assets/scss/global.scss'
import '@/assets/fonts/fonts.scss'
import App from './App.vue'
import { getRouter } from './router'
/**
 * 状态管理
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App)
	// 使用pinia代替vuex缓存
	.use(createPinia().use(piniaPluginPersist))
	.use(getRouter())
	.use(ElementPlus)
	.use(Antd)
	.mount('#app')
