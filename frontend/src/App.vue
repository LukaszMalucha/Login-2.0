<template>
    <div id="app">
      <NavBarComponent/>

      <router-view/>
    </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import { apiService } from "@/common/api.service.js";
import { mapActions } from 'vuex';

export default {
    name: "App",
    components: {
      NavBarComponent,

    },
    data() {
      return {
      }
    },
  computed: {
  },
    methods: {
      ...mapActions(['setUserInfo']),
      async getUsername() {
        const data = await apiService("/user/current-user/");
        const requestUser = data["email"];
        this.setUserInfo(requestUser);
      }

    },
    created() {
      this.getUsername()
    },
}
</script>