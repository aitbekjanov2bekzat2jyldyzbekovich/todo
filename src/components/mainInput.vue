<template>
  <div class="inputWrapp z-depth-1">
    <div class="inputBox">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea
                id="textarea1"
                class="materialize-textarea"
                v-model="this.bekaStore.inputValue"
              ></textarea>
              <label for="textarea1">Напишите текст</label>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Transition>
      <button
        class="waves-effect waves-light btn"
        v-if="this.bekaStore.inputValue.length > 5"
        @click="this.bekaStore.addPost()"
      >
        Добавить
      </button>
    </Transition>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useBekaStore } from "@/stores/beka";
export default {
  computed: {
    ...mapStores(useBekaStore),
  },
  watch: {
    "$route.query.q": {
      handler: function () {
        this.bekaStore.inputValue = "";
        this.bekaStore.dataHome = [];
        this.bekaStore.statusInputChange = false;
        this.bekaStore.inputChangeVallue = "";
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin-bottom: 0;
}
.inputBox {
  width: 100%;
}
.inputWrapp {
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
/* label color */
.input-field label {
  font-size: 15px !important;
}
.input-field textarea {
  font-size: 15px !important;
  transition: 200ms;
}
button {
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-enter-active,
.v-leave-active {
  scale: 1;
  transition: 200ms;
}

.v-enter-from,
.v-leave-to {
  scale: 0;
}
</style>
