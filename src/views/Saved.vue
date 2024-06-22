<template>
  <mainLayout>
    <inputChange />
    <savedCard />
  </mainLayout>
</template>
<script>
import { mapStores } from "pinia";
import { useBekaStore } from "@/stores/beka";
import mainLayout from "../layouts/mainLayout.vue";
import savedCard from "@/components/savedCards.vue";
import inputChange from "@/components/inputChange.vue";
export default {
  components: {
    mainLayout,
    savedCard,
    inputChange,
  },
  computed: {
    ...mapStores(useBekaStore),
  },
};
</script>
