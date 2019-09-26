import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import store from './store'
import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
