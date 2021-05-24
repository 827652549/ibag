import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import router from "./router";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(antd);
Vue.use(VueAxios, axios);
new Vue({
  store,

  router,
  render: (h) => h(App),
}).$mount("#app");
