import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import events from 'events-vue-allin'

Vue.config.productionTip = false
Vue.use(events)
new Vue({
  router,
  store,
  events,
  render: h => h(App)
}).$mount('#app')
