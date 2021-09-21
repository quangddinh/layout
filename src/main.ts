import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
