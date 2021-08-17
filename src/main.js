import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WjUI from './plugins'

import './assets/less/index.less'

Vue.config.productionTip = false
Vue.use(WjUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
