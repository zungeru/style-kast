import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  //  routes: es6 shortcut where key-value is the same
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //  router: es6 shortcut where key-value is the same
  router,
  render: h => h(App)
})
