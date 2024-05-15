import TestePage from "../pages/TestePage.vue";
import InicialPage from "../pages/InicialPage.vue";
import BibliotecaPage from "../pages/BibliotecaPage.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: InicialPage,
  },

  {
    path: "/biblioteca",
    component: BibliotecaPage,
  },
  {
    path:"/teste",
    component: TestePage
  }
];

const router = new VueRouter({
  routes,
});

export default router;
