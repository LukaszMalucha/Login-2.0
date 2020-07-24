<template>
    <div id="app">
      <NavBarComponent/>
      <router-view/>
    </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue"

export default {
    name: "App",
    components: {
      NavBarComponent
    },
    methods: {

    },
    created() {
    }
}
</script>