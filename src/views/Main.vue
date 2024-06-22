<template>
  <mainLayout>
    <mainInput />

    <mainCards v-if="this.bekaStore.dataHome.length" />
    <notFoundData v-else />
  </mainLayout>
</template>

<script>
import { mapStores } from "pinia";
import { useBekaStore } from "@/stores/beka";
import mainLayout from "../layouts/mainLayout.vue";
import mainInput from "@/components/mainInput.vue";
import mainCards from "@/components/mainCards.vue";
import notFoundData from "@/components/notFoundData.vue";
export default {
  computed: {
    ...mapStores(useBekaStore),
  },
  components: {
    mainInput,
    mainLayout,
    mainCards,
    notFoundData,
  },
};
</script>
