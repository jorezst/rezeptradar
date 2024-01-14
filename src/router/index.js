import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateRecipeView from "../views/CreateRecipeView.vue";
import CookModeView from "../views/CookModeView.vue";
import SettingsView from "@/views/SettingsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Rezept Anlegen",
    name: "createRecipe",
    component: CreateRecipeView,
  },
  {
    path: "/Kochmodus",
    name: "cookMode",
    component: CookModeView,
  },
  {
    path: "/Einstellungen",
    name: "Settings",
    component: SettingsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
