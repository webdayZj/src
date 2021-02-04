import echarts from 'echarts'
import Vue from 'vue'
import App from './App.vue'
import './plugins/axios.js'
import { getBaseUrl } from './plugins/common'
import './plugins/element.js'
import './plugins/vuehappyscroll'
import router from './router'
import store from './store'

Vue.prototype.GLOBAL = {
  baseUrl: getBaseUrl()
}

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
