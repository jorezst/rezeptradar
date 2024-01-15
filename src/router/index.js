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
    meta: { title: "Home" },
  },
  {
    path: "/Rezept Anlegen",
    name: "createRecipe",
    component: CreateRecipeView,
    meta: { title: "Rezept anlegen" },
  },
  {
    path: "/Kochmodus",
    name: "cookMode",
    component: CookModeView,
    meta: { title: "Kochmodus" },
  },
  {
    path: "/Einstellungen",
    name: "Settings",
    component: SettingsView,
    meta: { title: "Einstellungen" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
