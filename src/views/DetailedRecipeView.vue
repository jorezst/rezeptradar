<template>
  <v-container v-if="recipe">
    <v-row>
      <v-col>
        <v-img
          :src="recipe.mainImage"
          aspect-ratio="1.5"
          class="mb-4 rounded-xl"
        ></v-img>
        <h2>{{ recipe.name }}</h2>
        <h4>Benötigte Zeit: {{ recipe.time }} Minuten</h4>
        <v-chip-group row>
          <v-chip
            v-for="category in recipe.categories"
            :key="category"
            outlined
            >{{ category }}</v-chip
          >
        </v-chip-group>
      </v-col>
    </v-row>

    <!-- Portion Selector -->
    <v-row>
      <v-col>
        <h4>Portionsgröße</h4>
        <v-slider
          color="primary"
          v-model="portionCount"
          :max="10"
          :min="1"
          step="1"
          thumb-label
          always-dirty
        ></v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card variant="tonal" class="rounded-xl">
          <v-card-title>Zutaten für {{ portionCount }} Portionen </v-card-title>
          <v-list density="" rounded>
            <v-list-item
              v-for="ingredient in adjustedIngredients"
              :key="ingredient.name"
            >
              <v-list-item-content>
                • {{ ingredient.amount }} {{ ingredient.unit }}
                {{ ingredient.name }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <v-card variant="tonal" class="rounded-xl">
          <v-card-title>Utensilien</v-card-title>
          <v-list density="">
            <v-list-item v-for="utensil in recipe.utensils" :key="utensil">
              <v-list-item-content>• {{ utensil }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      class="fixed-button rounded-pill"
      color="primary"
      width="110px"
      @click="goToRecipeSteps(recipe.name)"
      >Schritte</v-btn
    >
  </v-container>
  <v-container v-else>
    <p>Recipe not found.</p>
  </v-container>
</template>

<script>
import { recipes } from "@/store/data/recipes";

export default {
  props: ["recipeName"],
  data() {
    return {
      portionCount: 2, // Default portions
    };
  },
  computed: {
    recipe() {
      return recipes.find((r) => r.name === this.recipeName);
    },
    adjustedIngredients() {
      if (!this.recipe) return [];

      // Adjust ingredient amounts based on portion count
      return this.recipe.ingredients.map((ingredient) => ({
        ...ingredient,
        amount: (ingredient.amount / 2) * this.portionCount, // Assuming the original recipe is for 2 portions
      }));
    },
  },
  methods: {
    goToRecipeSteps(recipeName) {
      this.$router.push({ name: "recipeSteps", params: { recipeName } });
    },
  },
};
</script>

<style>
.fixed-button {
  position: fixed; /* Fixed position */
  bottom: 70px; /* 20px from the bottom */
  right: 20px; /* 20px from the right */
  z-index: 1000; /* High z-index to ensure it's above other content */
  /* Additional styling for the button (size, color, etc.) */
}
</style>
