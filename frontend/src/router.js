import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginView from "./views/LoginView.vue"
import SignupView from "./views/SignupView.vue"
import AuthHandler from './views/AuthHandler.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
        {
      path: "/signup",
      name: "signup",
      component: SignupView
    },
    {
      path: '/oauth2/callback',
      name: "AuthHandler",
      component: AuthHandler,
    },
  ]
});
