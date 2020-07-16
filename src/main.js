import Vue from 'vue'
import Vuelidate from 'vuelidate'
// import VueResize from 'vue-resize'
// import 'vue-resize/dist/vue-resize.css'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuelidate)
// Vue.use(VueResize)

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
