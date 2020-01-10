import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Zh from './i18n/cn-zh.js'
import EN from './i18n/en-us.js'

Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem("Language") || 'zh', //获取本地储存语言类型 默认中文
  messages: {
    'zh':Zh,
    'en':EN
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
