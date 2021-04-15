import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

try {
  console.log('process.env.NODE_ENV===', process.env.NODE_ENV)
  console.log('process.env.VUE_APP_BASE_URL===', process.env.VUE_APP_BASE_URL)
  console.log('process.env', process.env)
} catch (error) {
  console.log(error)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
