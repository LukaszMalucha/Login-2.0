<template>
    <div id="app">
      <NavBarComponent/>

      <router-view/>
    </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import axios from 'axios';
import { CSRF_TOKEN } from "@/common/csrf_token.js"
import { mapActions } from 'vuex';

export default {
    name: "App",
    components: {
      NavBarComponent,

    },
    data() {
      return {
        token: window.localStorage.getItem("token"),
        currentUser: null,

      }
    },

    methods: {
      ...mapActions(['login', 'setUserInfo']),
      async getUserInfo() {
        axios.get("/auth/user/",
          { headers:{
                      'Content-Type': undefined,
                      'X-CSRFTOKEN': CSRF_TOKEN,
                      'Authorization': `Token ${this.token}`
                    }
          })
          .then(data =>{
            window.console.log(data)
          })

      },
    },
    created() {
      this.getUserInfo()
    },
}
</script>