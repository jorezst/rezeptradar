import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateRecipeView from "../views/CreateRecipeView.vue";
import CookModeView from "../views/CookModeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/createRecipe",
    name: "createRecipe",
    component: CreateRecipeView,
  },
  {
    path: "/cookMode",
    name: "cookMode",
    component: CookModeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
