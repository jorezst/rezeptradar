import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateRecipeView from "../views/CreateRecipeView.vue";
import CookModeView from "../views/CookModeView.vue";
import SettingsView from "../views/SettingsView.vue";
import DetailedRecipeView from "../views/DetailedRecipeView.vue";
import recipeStepsView from "@/views/recipeStepsView.vue";

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
  {
    path: "/recipe/:recipeName", // :recipeName is a dynamic segment
    name: "detailedRecipe",
    component: DetailedRecipeView,
    props: true, // This allows the route to pass the dynamic segment as a prop to the component
    meta: { title: "Kochmodus" },
  },
  {
    path: "/recipeSteps/:recipeName", // :recipeName is a dynamic segment
    name: "recipeSteps",
    component: recipeStepsView,
    props: true, // This allows the route to pass the dynamic segment as a prop to the component
    meta: { title: "Kochmodus" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
