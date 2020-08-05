import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueYoutube from 'vue-youtube' 
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import VueSlider from 'vue-slider-component'


Vue.config.productionTip = false

Vue.use(VueYoutube)
Vue.component('v-slider', VueSlider)
Vue.component('v-icon', Icon)
Vue.prototype.$analytics = firebase.analytics()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
