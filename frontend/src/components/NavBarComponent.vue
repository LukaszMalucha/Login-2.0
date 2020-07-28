<template>
<nav class="navbar navbar-default top-navbar" role="navigation">
  <div class="navbar-header">
    <router-link class="navbar-brand" :to="{ name: 'home'}" >
      <img src="static/img/logo-blue-small.png" alt="Logo"
           class="img-logo"/>
    </router-link>
  </div>
  <div class="col s10 m4 l5 plain-element center-align">

  </div>
  <div class="col s4 m5 l5 plain-element">
    <ul  v-if="isLoggedIn" class="nav navbar-top-links navbar-right">
      <li><a  @click="logout" class="nav-link">Logout</a></li>
    </ul>
    <ul v-else class="nav navbar-top-links navbar-right">
      <li><router-link  :to="{ name: 'login'}" class="nav-link" href="">Log In</router-link></li>
      <li><router-link  :to="{ name: 'signup'}" class="nav-link" href="">Sign Up</router-link></li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "NavBarComponent",
  computed: {
      ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['logout'])
  },

};
</script>

