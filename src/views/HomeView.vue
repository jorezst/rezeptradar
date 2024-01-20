<template>
  <v-container>
    <SearchBar @update-search="handleSearch"></SearchBar>
    <RecipeGrid :search-query="searchQuery"></RecipeGrid>
  </v-container>
</template>

<script>
import SearchBar from "@/components/home/SearchBar.vue";
import RecipeGrid from "@/components/home/RecipeGrid.vue";
import { ref } from "vue";

// Components

export default {
  name: "HomeView",
  components: {
    SearchBar,
    RecipeGrid,
  },
  setup() {
    const searchQuery = ref("");

    const handleSearch = (newQuery) => {
      searchQuery.value = newQuery;
    };

    return { searchQuery, handleSearch };
  },
};
</script>
