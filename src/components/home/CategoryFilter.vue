<template>
  <v-select
    chips=""
    rounded
    bg-color="background"
    color="primary"
    variant="outlined"
    :items="categories"
    label="Kategorie"
    v-model="selectedCategories"
    multiple
  ></v-select>
</template>

<script>
import { ref, watch } from "vue";
import { useCategoriesStore } from "@/store/data/categories.js";
export default {
  name: "CategoryFilter",
  emits: ["update-category"],
  setup(props, { emit }) {
    const { categories } = useCategoriesStore();
    const selectedCategories = ref();

    // Watch the selectedCategory for changes
    watch(selectedCategories, (newValue) => {
      emit("update-category", newValue);
    });

    return {
      categories,
      selectedCategories,
    };
  },
};
</script>
