<template>
  <div>
      Please wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'GithubHandler',
  methods: {
    ...mapActions(['finalizeGithubLogin']),
  },
  created() {
//      this.finalizeGithubLogin(window.location.hash);

  },
};
</script>