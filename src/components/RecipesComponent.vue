<template>
  <v-container>
    <search-bar-component
      @search-updated="onSearchUpdated"
    ></search-bar-component>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="recipe in filteredRecipes"
        :key="recipe.name"
      >
        <v-card variant="tonal" class="rounded-xl">
          <v-img :src="recipe.mainImage" aspect-ratio="1.5"></v-img>
          <v-card-title>{{ recipe.name }}</v-card-title>
          <v-card-subtitle>{{ recipe.time }} Minuten</v-card-subtitle>
          <v-card-text>
            <v-chip-group>
              <v-chip v-for="category in recipe.categories" :key="category">
                {{ category }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="goToRecipe(recipe.name)"
              >Details</v-btn
            >
          </v-card-actions>
        </v-card>
        <!-- Your existing recipe card layout -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { recipes } from "@/store/data/recipes";
import SearchBarComponent from "@/components/SearchBarComponent.vue";

export default {
  name: "RecipesComponent",
  components: {
    SearchBarComponent,
  },
  data() {
    return {
      recipes,
      searchQuery: "",
    };
  },
  computed: {
    filteredRecipes() {
      if (!this.searchQuery.trim()) {
        // When the search query is empty, return all recipes
        return this.recipes;
      }
      // Return filtered recipes when there is a search query
      return this.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    onSearchUpdated(query) {
      this.searchQuery = query;
    },
    goToRecipe(recipeName) {
      this.$router.push({ name: "detailedRecipe", params: { recipeName } });
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to your component here */
</style>
