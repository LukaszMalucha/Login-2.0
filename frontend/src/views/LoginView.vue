<template>
<div id="page-index">
  <div class="form-container">

    <form class="form-signin" method="post" action="">
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
              <input type="text" name="email"  required="" id="id_email">
              <label class="" for="id_email">Email</label>
            </div>
          </div>
          <div class="row plain-element">
            <div class="input-field col s12">
              <input type="password" name="password"  required="" id="id_password">
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
</template>

<script>

export default {
  name: "LoginView",
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

    document.title = "Auth";
  }
};
</script>
