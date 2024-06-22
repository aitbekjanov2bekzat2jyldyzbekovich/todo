<template>
  <TransitionGroup name="list" tag="div" class="appMesageWraper">
    <div
      class="mesaageBox z-depth-1"
      v-for="i in this.bekaStore.appMessage"
      :key="i.id"
    >
      <p>{{ i.message }}</p>
    </div>
  </TransitionGroup>
</template>

<script>
import { mapStores } from "pinia";
import { useBekaStore } from "@/stores/beka";

export default {
  computed: {
    ...mapStores(useBekaStore),
  },
};
</script>

<style lang="css" scoped>
.appMesageWraper {
  width: 19%;
  scrollbar-width: none;
  gap: 10px;
  position: absolute;
  top: 10px;
  left: 0;
  height: 300px;
  overflow-x: auto;
}
.mesaageBox {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 30px;
  border-right: 10px solid #2bbbad;
  background-color: white;
  transition: all 200ms;
}

p {
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  font-size: 20px;
  font-weight: 500;
}
.list-enter-active,
.list-leave-active {
  scale: 1;
  transition: all 200ms;
}
.list-enter-from,
.list-leave-to {
  scale: 0;
}
</style>
