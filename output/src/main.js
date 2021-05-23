import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')
