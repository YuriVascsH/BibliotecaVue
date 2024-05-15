import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router.js";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6MZUUXYJT2eG3lKwk386nSOXg4vOctNk",
  authDomain: "projetofirebase-f5ab1.firebaseapp.com",
  projectId: "projetofirebase-f5ab1",
  storageBucket: "projetofirebase-f5ab1.appspot.com",
  messagingSenderId: "857335660599",
  appId: "1:857335660599:web:5d19e0192348e27d9b3fb2",
  measurementId: "G-12B6E7WGDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
