import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myUI from "./packages/index"

Vue.config.productionTip = false;
Vue.use(myUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");