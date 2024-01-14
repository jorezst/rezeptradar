import { defineStore } from "pinia";
import { recipes } from "@/store/data/recipes";

export default defineStore({
  state: {
    currentRecipe: {},
    currentSearchValue: "",
    currentCategories: [],
    recipes: recipes,
    loadedItems: 4,
  },
  mutations: {
    loadSearchValue(state, payload) {
      state.currentSearchValue = payload;
    },
    setCurrentCategories(state, payload) {
      state.currentCategories = payload;
    },
    incrementLoadedItems(state, payload) {
      state.loadedItems += payload;
    },
    addNewRecipe(state, payload) {
      state.recipes = [...state.recipes, payload];
    },
  },
  actions: {},
  modules: {
    setCurrentCount(state, payload) {
      state.currentRecipe = payload;
    },
  },
  getters: {
    getCurrentRecipes: (state) => state.recipes,
  },
});
