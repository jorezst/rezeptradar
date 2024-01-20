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
</template>

<script>
import { useRecipesStore } from "@/store/data/recipes";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "RecipeGrid",
  props: {
    searchQuery: {
      type: String,
      default: "", // Default value set to an empty string
    },
  },
  setup(props) {
    const recipesStore = useRecipesStore();
    const router = useRouter();

    const filteredRecipes = computed(() => {
      if (!props.searchQuery) {
        return recipesStore.recipes;
      }
      return recipesStore.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(props.searchQuery.toLowerCase())
      );
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
