import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Main.vue"),
    },
    {
      path: "/saved",
      name: "save",
      component: ()=> import('../views/Saved.vue')
    },
  ],
});

export default router;
