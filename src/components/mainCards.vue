<template>
  <div class="cardWrapp">
    <TransitionGroup name="list" tag="div">
      <div
        class="cardsw"
        v-for="i in this.bekaStore.dataHome"
        :key="i.id"
        ref="listItem"
      >
        <Transition name="fade">
          <p class="green-text p" v-if="i.status">Сохранено</p>
        </Transition>
        <div class="cards z-depth-1" v-html="i.text" />
        <div class="btnWrapper">
          <button
            class="waves-effect waves-dark btn red"
            @click="this.bekaStore.removePost(i.id)"
          >
            Удалить
          </button>
          <button
            class="waves-effect waves-green btn"
            @click="this.bekaStore.sevePost(i)"
          >
            <i v-if="i.status">Не сохранить</i>
            <i v-else>Cохранить</i>
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
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
i {
  font-size: 15px;
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
.fade-enter-active,
.fade-leave-active {
  transform: translateY(0px);
  transition: all 200ms;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(30px);
}
.p {
  font-weight: 600;
}
</style>
