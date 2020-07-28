<template>
<div class="row plain-element">
  <div id="alert" class="alert alert-danger" role="alert">
    {{error}}
  </div>
  <div id="page-index">
    <div class="form-container">
      <form class="form-user" @submit.prevent="resetPassword">
        <fieldset class="form-box">
           <div class="row plain-element center-align">
            <h3>Reset Password</h3>
          </div>
          <br>
          <div class="row text-center row-form">
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="text" name="email" v-model="email" required id="id_email">
                <label class="" for="id_email">Email</label>
              </div>
            </div>
          </div>
          <div class="row row-links">
            <p><router-link :to="{ name: 'login'}">Back to Log In</router-link>&nbsp; | &nbsp; <router-link :to="{ name: 'signup'}">Create an Account</router-link></p>
          </div>
          <div class="row row-links">
            <p v-bind:show="message">{{message}}</p>
          </div>
          <button type="submit" class="btn-login"><span>Send Email <i class="far fa-arrow-alt-circle-right"></i></span>
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { CSRF_TOKEN } from "@/common/csrf_token.js"

export default {
  name: "ForgotPasswordView",
  data() {
    return {
        email: null,
        message: null,
        error: null,
    }
  },
  methods: {
    resetPassword() {
      let formData = new FormData();
      formData.append("email", this.email);
      axios.post("/auth/password/reset/", formData,
        { headers: { 'Content-Type': undefined,'X-CSRFTOKEN': CSRF_TOKEN} } )
        .then(response => {
            window.console.log(response);
            this.message = "Message has been sent to " + this.email
        })
        .catch(error => {
          window.console.log(error);
          this.error = "Message can't be send to provided email address.";
          document.getElementById("alert").style.display = "block";
          setTimeout(() => document.getElementById("alert").style.display = "none", 5000);
        })
    }
  },
  created() {
    document.title = "Forgot Password";
  }
};
</script>
