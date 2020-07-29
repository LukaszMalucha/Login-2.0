<template>
<div class="row plain-element">
  <div id="page-index">
    <div class="form-container">
      <form class="form-user" @submit.prevent="signUp">
        <fieldset class="form-box">
          <div class="row plain-element center-align">
            <h3>Sign Up</h3>
          </div>
          <div class="row text-center row-form">
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="text" name="email" id="id_email" v-model="email" required>
                <label class="" for="id_email">Email</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="password" name="password1" id="id_password1" v-model="password1" required>
                <label class="" for="id_password1">Password</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="password" name="password2" id="id_password2" v-model="password2" required>
                <label class="" for="id_password2">Confirm Password</label>
              </div>
            </div>

          </div>
          <div class="row row-links">
            <p><router-link :to="{ name: 'login'}"> Already have an account?  Log in</router-link></p>
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
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import { CSRF_TOKEN } from "@/common/csrf_token.js"

export default {
  name: "SignupView",
  data() {
    return {
        email: null,
        password1: null,
        password2: null,
    }
  },
  methods: {
    ...mapActions(['login', 'setUserInfo', 'authError']),
    ...mapGetters(['getError']),
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
    loginUser(token) {
      this.login(token)
    },
    setUsername(username) {
        this.setUserInfo(username)
    },
    showError(error) {
      this.authError(error)
    },
    signUp() {
      if (!this.email || !this.password1 || !this.password2 ) {
        this.showError("Fields can't be empty.");
      }
      else {
        let endpoint = "/auth/registration/";
        apiService(endpoint, "POST", {"username": this.email , "email": this.email, "password1": this.password1, "password2": this.password2 })
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
                this.$router.push({ name: 'home' })
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
