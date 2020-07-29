<template>
  <div  id="alert" class="alert alert-danger" role="alert">
    {{ getError() }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "MessageComponent",
  methods: {
  ...mapGetters(['getError']),
  }
};

</script>

