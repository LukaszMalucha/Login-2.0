import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginView from "./views/LoginView.vue";
import SignupView from "./views/SignupView.vue";
import ForgotPasswordView from "./views/ForgotPasswordView.vue";

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
      path: "/signup",
      name: "signup",
      component: SignupView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPasswordView
    },
  ]
});
