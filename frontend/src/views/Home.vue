<template>
  <div class="home">
    HOME
  </div>
</template>

<script>
import { apiService } from "@/common/api.service.js";
export default {
  name: "home",
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
