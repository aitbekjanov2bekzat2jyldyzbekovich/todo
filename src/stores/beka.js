import { defineStore } from "pinia";
import { uid } from "uid";

export const useBekaStore = defineStore("beka", {
  state: () => ({
    inputValue: "",
    dataHome: [],
    URL: "http://localhost:3000/savedPosts",
    dataSave: [],
    loadStatus: true,
    appMessage: [],
    idChangeCard: null,
    statusInputChange: false,
    inputChangeVallue: "",
  }),
  actions: {
    addPost() {
      if (this.inputValue.length > 5) {
        this.dataHome.unshift({
          id: uid(),
          text: `<p>${this.inputValue}</p>`,
          status: false,
        });
        this.inputValue = "";
      }
    },

    removePost(id) {
      this.dataHome = this.dataHome.filter((i) => i.id !== id);
    },

    async sevePost(item) {
      if (item.status) {
        this.removeSavedPost(item.id, item);
      } else {
        const response = await fetch(this.URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        item.status = response.ok;
      }
    },

    async removeSavedPost(id, items) {
      const response = await fetch(`${this.URL}/${id}`, {
        method: "DELETE",
      });
      response.ok ? (items.status = false) : true;
      this.getPost();
    },

    async getPost() {
      const ressponse = await fetch(this.URL);
      const ress = await ressponse.json();
      this.dataSave = await ress;
      ressponse.ok ? (this.loadStatus = false) : true;
    },

    async sendMessage(text) {
      await this.appMessage.unshift({
        id: uid(),
        message: text,
      });
      await this.clearMessage();
    },

    clearMessage() {
      setTimeout(() => {
        this.appMessage = this.appMessage.filter((i, index, arr) => {
          return arr.length < index;
        });
      }, 5000);
    },

    openInp(id, text) {
      this.inputChangeVallue = text;
      this.statusInputChange = true;
      this.idChangeCard = id;
    },
    async changeCard() {
      const response = await fetch(`${this.URL}/${this.idChangeCard}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: this.inputChangeVallue }),
      });
      this.statusInputChange = false;
      await this.getPost();
      (await response.ok) ? this.sendMessage("Изменено") : this.clearMessage();
    },
  },
});
