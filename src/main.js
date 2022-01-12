import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './utils/createjs';
// import './utils/inter';
// import './utils/canvas';
import "./assets/tailwind.css";
import "./assets/styles/main.scss";
import VModal from "vue-js-modal";
import typograf from "./utils/filters";
import vueAwesomeCountdown from "vue-awesome-countdown";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/dist/fullpage.css";

import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// select plugin
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/src/scss/vue-select.scss";
// select plugin
// tooltip
import VTooltip from "v-tooltip";
Vue.use(VTooltip);
// tooltip
Vue.filter("text", typograf);

import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll);

import VueScrollactive from "vue-scrollactive";

Vue.use(VueScrollactive);

import Vuelidate from "vuelidate";

import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);
Vue.use(VueFullPage);

Vue.use(VModal);
Vue.use(vueAwesomeCountdown, "vac");
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
