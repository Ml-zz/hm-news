import Vue from 'vue'
import App from './App.vue'
import '../styles/base.less'
import '../styles/iconfont.css'
import 'lib-flexible'
import router from './router/index.js'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmBotton from './components/HmBotton.vue'
import HmInput from './components/HmInput.vue'
import axios from 'axios'

// 把axios绑定到vue的原型上
Vue.prototype.$axios = axios
//给axios配置默认路径
axios.defaults.baseURL = 'http://localhost:3000'

//全局注册公共组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-botton', HmBotton)
Vue.component('hm-input', HmInput)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
