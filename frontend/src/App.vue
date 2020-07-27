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
      async setUserInfo() {
        axios.get("/auth/user/",
          { headers:{
                      'Content-Type': undefined,
                      'X-CSRFTOKEN': CSRF_TOKEN,
                      'Authorization': `Token ${this.token}`
                    }
          })
          .then(data =>{
            window.localStorage.setItem("username", data.data.username);
            window.console.log(data.data.username);
          })

      },
    },
    created() {
      this.setUserInfo()
    },
    beforeRouteUpdate (to, from, next) {
      this.currentUser = window.localStorage.getItem("username")
      next();
    }


}
</script>