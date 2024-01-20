import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateRecipeView from "../views/CreateRecipeView.vue";
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
    meta: { title: "Rezeptdetails" },
  },
  {
    path: "/recipeSteps/:recipeName", // :recipeName is a dynamic segment
    name: "recipeSteps",
    component: recipeStepsView,
    props: true, // This allows the route to pass the dynamic segment as a prop to the component
    meta: { title: "Rezeptschritte" },
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top for every route, but return to saved position when available (e.g., using back button)
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHashHistory(),
  routes,
});

export default router;
