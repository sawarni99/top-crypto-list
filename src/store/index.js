import Vuex from "vuex";
import Vue from "vue";
import crypto from "./modules/crypto";

//Load vuex
Vue.use(Vuex);

// Creating store...
export default new Vuex.Store({
  modules: { crypto },
});
