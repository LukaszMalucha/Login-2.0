<template>
<div class="row plain-element">
  <div id="page-index">
    <div class="form-container">
      <form class="form-user" @submit.prevent="logIn">
        <fieldset class="form-box">
           <div class="row plain-element center-align">
            <h3>Log In</h3>
            <div class="row row-oauth">
                <a href="/accounts/twitter/login/?process=login"> <i class="fab fa-twitter"></i> </a>
                <a href="/accounts/github/login/?process=login"> <i class="fab fa-github"></i> </a>
                <a href="/accounts/google/login/?process=login"> <i class="fab fa-google"></i> </a>
            </div>
          </div>
          <div class="row text-center row-form">
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="text" name="email" v-model="email" required id="id_email">
                <label class="" for="id_email">Email</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="password" name="password" v-model="password" required id="id_password">
                <label class="" for="id_password">Password</label>
              </div>
            </div>

          </div>
          <div class="row row-links">
            <p><router-link :to="{ name: 'forgot-password'}">Forgot Password</router-link>&nbsp; | &nbsp; <router-link :to="{ name: 'signup'}">Create an Account</router-link></p>
          </div>
          <button type="submit" class="btn-login"><span>Continue <i class="far fa-arrow-alt-circle-right"></i></span>
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { apiService } from "@/common/api.service.js";
import { mapActions } from 'vuex';
import axios from 'axios';
import { CSRF_TOKEN } from "@/common/csrf_token.js"

export default {
  name: "LoginView",
  data() {
    return {
        email: null,
        password: null,
    }
  },
  methods: {
    ...mapActions(['login', 'setUserInfo', 'authError']),
    loginUser(token) {
      this.login(token)
    },
    setUsername(username) {
        this.setUserInfo(username)
    },
    showError(error) {
      this.authError(error)
    },
    getUserInfo(token) {
        axios.get("/auth/user/",
        { headers:{
                    'Content-Type': undefined,
                    'X-CSRFTOKEN': CSRF_TOKEN,
                    'Authorization': `Token ${token}`
                  }
        })
        .then(data =>{
          this.setUsername(data.data.email)
        })
    },
    logIn() {
      if (!this.email || !this.password ) {
          this.showError("Fields can't be empty.");
      }
      else {
        let endpoint = "/auth/login/";
        apiService(endpoint, "POST", {"email": this.email, "password": this.password })
          .then(data => {
            if (data) {
              if (data.email) {
                this.showError(data.email[0]);
              }
              else if (data.non_field_errors) {
                this.showError(data.non_field_errors[0]);
              }
              else if (data.password1) {
                this.showError(data.password1[0]);
              }
              else if (data.key) {
                this.loginUser(data.key);
                this.getUserInfo(data.key);
                this.$router.push({ name: 'home' });
              }
            }
        })

      }
    }

  },
  created() {
    document.title = "Auth";
  }
};
</script>
