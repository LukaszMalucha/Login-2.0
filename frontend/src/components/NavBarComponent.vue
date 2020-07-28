<template>
<nav class="navbar navbar-default top-navbar" role="navigation">
  <div class="navbar-header">
    <a class="navbar-brand" href="index.html">
      <img src="static/img/logo-blue-small.png" alt="Logo"
           class="img-logo"/>
    </a>
  </div>
  <div class="col s10 m4 l5 plain-element center-align">

  </div>
  <div class="col s4 m5 l5 plain-element">
    <ul   class="nav navbar-top-links navbar-right">
      <li><router-link  :to="{ name: 'logout'}" class="nav-link">Logout</router-link></li>
       <li><a class="nav-link">username: {{ getUsername }}</a></li>
    </ul>
    <ul  class="nav navbar-top-links navbar-right">
      <li><router-link  :to="{ name: 'login'}" class="nav-link" href="">Log In</router-link></li>
      <li><router-link  :to="{ name: 'signup'}" class="nav-link" href="">Sign Up</router-link></li>
      <li><a  class="nav-link" href="">Is logged: {{ isLoggedIn }}</a></li>
      <li><a href="#" class="nav-link">Vuex Login</a></li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "NavBarComponent",
  computed: {
      ...mapGetters(['isLoggedIn','getUsername']),
  },
  methods: {

  },

};
</script>

