<template>
  <v-container>
    <SearchBar @update-search="handleSearch"></SearchBar>
    <CategoryFilter @update-category="handleCategoryUpdate"></CategoryFilter>
    <RecipeGrid
      :search-query="searchQuery"
      :selected-category="selectedCategory"
    ></RecipeGrid>
  </v-container>
</template>

<script>
import SearchBar from "@/components/home/SearchBar.vue";
import RecipeGrid from "@/components/home/RecipeGrid.vue";
import CategoryFilter from "@/components/home/CategoryFilter.vue";
import { ref } from "vue";

// Components

export default {
  name: "HomeView",
  components: {
    CategoryFilter,
    SearchBar,
    RecipeGrid,
  },
  setup() {
    const searchQuery = ref("");
    const selectedCategory = ref("");

    const handleSearch = (newQuery) => {
      searchQuery.value = newQuery;
    };

    const handleCategoryUpdate = (category) => {
      selectedCategory.value = category;
    };

    return {
      searchQuery,
      handleSearch,
      handleCategoryUpdate,
      selectedCategory,
    };
  },
};
</script>
