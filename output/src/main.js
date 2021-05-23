import vueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(vueMaterial)
new Vue({
  render: h => h(App),
}).$mount('#app')
