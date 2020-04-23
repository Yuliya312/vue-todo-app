<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import TodoLayout from "@/layouts/TodoLayout";
import HomeLayout from "@/layouts/HomeLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "todo") + "-layout";
    }
  },
  components: {
    TodoLayout,
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
