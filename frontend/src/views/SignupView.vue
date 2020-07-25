<template>
<div id="page-index">
  <div class="form-container">

    <form class="form-signin" method="post" action="">
      <fieldset class="form-box">
         <div class="row plain-element center-align">
          <h3>Sign Up</h3>

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
          <div class="row plain-element">
            <div class="input-field col s12">
              <input type="password" name="password2"  required="" id="id_password2">
              <label class="" for="id_password2">Confirm Password</label>
            </div>
          </div>

        </div>
        <div class="row row-links">
          <p><a href=""> Already have an account?  Log in</a></p>
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
  name: "SignupView",
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
