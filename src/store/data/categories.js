import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [
      "Frühstück",
      "Mittagessen",
      "Abendessen",
      "Dessert",
      "Vorspeisen",
      "Backrezepte",
      "Vegan",
      "Vegetarisch",
      "Lieblingsrezepte",
    ],
  }),
  actions: {
    addCategory(category) {
      if (!this.categories.includes(category)) {
        this.categories.push(category);
      }
    },
    removeCategory(category) {
      this.categories = this.categories.filter((c) => c !== category);
    },
  },
  getters: {
    getCategory: (state) => (category) => {
      return state.categories.includes(category);
    },
  },
});
