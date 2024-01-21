<template>
  <v-container>
    <!-- Implement the Category Filter and Searchbar in a Column Layout beside eachother -->
    <v-row class="sticky-nav">
      <v-col>
        <CategoryFilter
          @update-category="handleCategoryUpdate"
        ></CategoryFilter>
      </v-col>
      <v-col>
        <SearchBar @update-search="handleSearch"></SearchBar>
      </v-col>
    </v-row>
    <!-- Implement the Recipegrid and send the Search Results to them -->
    <RecipeGrid
      :search-query="searchQuery"
      :selected-categories="selectedCategories"
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
    const searchQuery = ref();
    const selectedCategories = ref();

    const handleSearch = (newQuery) => {
      searchQuery.value = newQuery;
    };

    const handleCategoryUpdate = (categories) => {
      selectedCategories.value = categories;
    };

    return {
      searchQuery,
      handleSearch,
      handleCategoryUpdate,
      selectedCategories,
    };
  },
};
</script>

<style>
.sticky-nav {
  position: sticky;
  top: 60px;
  z-index: 1000; /* Ensures the search bar stays on top of other content */
}
</style>
