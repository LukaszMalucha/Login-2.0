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
          .then(response =>{
            window.console.log(response);
          })

      }

    },
    created() {
      this.setUserInfo()
    }
}
</script>