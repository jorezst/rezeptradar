<template>
  <v-row>
    <v-col
      v-for="recipe in filteredRecipes"
      :key="recipe.name"
      cols="12"
      md="6"
      lg="4"
    >
      <v-card variant="tonal" class="rounded-xl">
        <v-img :src="recipe.mainImage" aspect-ratio="1.5"></v-img>
        <v-card-title>{{ recipe.name }}</v-card-title>
        <v-card-subtitle>{{ recipe.time }} Minuten</v-card-subtitle>
        <v-card-item>
          <v-chip-group>
            <v-chip v-for="category in recipe.categories" :key="category">
              {{ category }}
            </v-chip>
          </v-chip-group>
        </v-card-item>
        <v-card-item class="d-flex justify-end">
          <v-btn
            color="primary"
            class="rounded-xl mb-2"
            @click="goToRecipe(recipe.name)"
            >Details</v-btn
          >
        </v-card-item>
      </v-card>
      <!-- Your existing recipe card layout -->
    </v-col>
  </v-row>
</template>

<script>
import { useRecipesStore } from "@/store/data/recipes";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "RecipeGrid",
  props: {
    searchQuery: String,
    selectedCategories: Array,
  },
  setup(props) {
    const recipesStore = useRecipesStore();
    const router = useRouter();

    const filteredRecipes = computed(() => {
      let result = recipesStore.recipes;

      // Filter based on search query
      if (props.searchQuery) {
        result = result.filter((recipe) =>
          recipe.name.toLowerCase().includes(props.searchQuery.toLowerCase())
        );
      }
      // Filter based on selected category
      if (props.selectedCategories && props.selectedCategories.length) {
        result = result.filter((recipe) =>
          recipe.categories.some((category) =>
            props.selectedCategories.includes(category)
          )
        );
      }
      return result;
    });

    const goToRecipe = (recipeName) => {
      // Logic to navigate to the recipe detail page
      // For example, using router.push to navigate
      router.push(`/recipe/${recipeName}`);
    };

    return { filteredRecipes, goToRecipe };
  },
};
</script>

<style scoped>
/* Add any styles specific to your component here */
</style>
