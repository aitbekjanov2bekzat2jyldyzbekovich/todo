<template>
  <appMessage />
  <div class="container">
    <navBar />
    <slot />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import appMessage from "../components/appMessage.vue";
export default {
  components: {
    navBar,
    appMessage,
  },
};
</script>
