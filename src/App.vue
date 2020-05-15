<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import NoteLayout from "@/layouts/NoteLayout";
import HomeLayout from "@/layouts/HomeLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "note") + "-layout";
    }
  },
  components: {
    NoteLayout,
    HomeLayout
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
