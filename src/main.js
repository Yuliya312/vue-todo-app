import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuelidate)

// Vue.directive('focus', {
//   inserted: function (el) {
//     el.focus()
//   }
// })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
