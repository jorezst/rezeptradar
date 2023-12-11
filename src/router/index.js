import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateRecipeView from "../views/CreateRecipeView.vue";
import CookModeView from "../views/CookModeView.vue";
import OverviewRecipesView from "@/views/OverviewRecipesView.vue";
import SettingsView from "@/views/SettingsView.vue";
import RecipeSearchView from "@/views/RecipeSearchView.vue";

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
  {
    path: "/recipeOverview",
    name: "recipeOveriew",
    component: OverviewRecipesView,
  },
  {
    path: "/Settings",
    name: "Settings",
    component: SettingsView,
  },
  {
    path: "/Search",
    name: "Search",
    component: RecipeSearchView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
