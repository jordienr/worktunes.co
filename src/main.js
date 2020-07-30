import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueYoutube from 'vue-youtube' 
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

Vue.config.productionTip = false

Vue.use(VueYoutube)
Vue.component('v-icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
