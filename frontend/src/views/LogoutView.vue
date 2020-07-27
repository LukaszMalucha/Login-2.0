<template>
  <div>
      Please wait...
  </div>
</template>


<script>


export default {
  name: 'LogoutView',
  methods: {
    logout() {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        this.$router.push({ name: 'home' })
    },
  },
  created() {
    this.logout()
  },
};
</script>