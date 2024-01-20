<template>
  <v-row>
    <v-col>
      <v-select
        rounded
        color="primary"
        variant="outlined"
        :items="categories"
        label="Kategorie auswählen"
        v-model="selectedCategory"
        clearable
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
import { ref, watch } from "vue";
import { useCategoriesStore } from "@/store/data/categories.js";
export default {
  name: "CategoryFilter",
  emits: ["update-category"],
  setup(props, { emit }) {
    const { categories } = useCategoriesStore();
    const selectedCategory = ref("");

    // Watch the selectedCategory for changes
    watch(selectedCategory, (newValue) => {
      emit("update-category", newValue);
    });

    return {
      categories,
      selectedCategory,
    };
  },
};
</script>

<style scoped></style>
