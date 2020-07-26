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
    <ul v-if="isLoggedIn"  class="nav navbar-top-links navbar-right">
      <li><a class="nav-link" @click="logout">Logout</a></li>
       <li><a class="nav-link">{{ getUsername }}</a></li>
    </ul>
    <ul v-else class="nav navbar-top-links navbar-right">
      <li><router-link :to="{ name: 'login'}" class="nav-link" href="">Log In</router-link></li>
      <li><router-link :to="{ name: 'signup'}" class="nav-link" href="">Sign Up</router-link></li>
      <li><a class="nav-link" @click="loginImgur">Imgur</a></li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "NavBarComponent",
  computed: {
      getUsername() {
        return window.localStorage.getItem("username");
      },
      ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['loginImgur', 'logout' ]),
  }
};
</script>

