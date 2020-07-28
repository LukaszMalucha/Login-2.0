<template>
<div class="row plain-element">
  <div id="alert" class="alert alert-danger" role="alert">
    {{ error }}
  </div>
  <div id="page-index">
    <div class="form-container">

      <form class="form-user" @submit.prevent="logIn">
        <fieldset class="form-box">
           <div class="row plain-element center-align">
            <h3>Log In</h3>
            <div class="row row-oauth">
                  <i class="fab fa-github"></i>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-google"></i>
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
            <p><a href="">Forgot Password</a>&nbsp; | &nbsp; <a href="">Create an Account</a></p>
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

export default {
  name: "LoginView",
  data() {
    return {
        email: null,
        password: null,
        error: null,
    }
  },
  methods: {
    ...mapActions(['login', 'setUserInfo']),
    loginUser(token) {
      this.login(token)
    },
    setUsername(username) {
      this.setUserInfo(username)
    },
    logIn() {
      if (!this.email || !this.password ) {
        this.error = "Fields can't be empty."
        document.getElementById("alert").style.display = "block";
        setTimeout(() => document.getElementById("alert").style.display = "none", 5000);
      }
      else {
        let endpoint = "/auth/login/";
        apiService(endpoint, "POST", {"email": this.email, "password": this.password })
          .then(data => {
            if (data) {
              if (data.email) {
                this.error = data.email[0];
                document.getElementById("alert").style.display = "block";
                setTimeout(() => document.getElementById("alert").style.display = "none", 5000);
              }
              else if (data.non_field_errors) {
                this.error = data.non_field_errors[0];
                document.getElementById("alert").style.display = "block";
                setTimeout(() => document.getElementById("alert").style.display = "none", 5000);
              }
              else if (data.password1) {
                this.error = data.password1[0];
                document.getElementById("alert").style.display = "block";
                setTimeout(() => document.getElementById("alert").style.display = "none", 5000);
              }
              else if (data.key) {
                this.loginUser(data.key);
                this.setUserInfo("ADMIN");
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
