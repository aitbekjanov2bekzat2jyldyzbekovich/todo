<template>
  <loader v-if="this.bekaStore.loadStatus" />
  <div class="cardWrapp" v-if="this.bekaStore.dataSave.length">
    <TransitionGroup name="list" tag="div">
      <div class="cardsw" v-for="i in this.bekaStore.dataSave" :key="i.id">
        <div class="cards z-depth-1" v-html="i.text" />
        <div class="btnWrapper">
          <button
            class="waves-effect waves-dark btn red"
            @click="this.bekaStore.removeSavedPost(i.id, i)"
          >
            Удалить
          </button>
          <button
            class="waves-effect waves-dark btn orange accent-3"
            @click="this.bekaStore.openInp(i.id, i.text)"
          >
            Изменить
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
  <notFoundData
    v-if="
      this.bekaStore.dataSave.length < 1 && this.bekaStore.loadStatus === false
    "
  />
</template>

<script>
import loader from "@/components/loader.vue";
import notFoundData from "./notFoundData.vue";
import { mapStores } from "pinia";
import { useBekaStore } from "@/stores/beka";
export default {
  computed: {
    ...mapStores(useBekaStore),
  },
  components: {
    notFoundData,
    loader,
  },
  mounted() {
    this.bekaStore.getPost();
  },
};
</script>

<style lang="css" scoped>
.cards {
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  z-index: 2;
}

.cardsw {
  transition: all 200ms;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  width: 100%;
}
button {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnWrapper {
  display: flex;
  justify-content: end;
  gap: 5px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
