<template>
  <v-container v-if="recipe">
    <v-row>
      <v-col v-for="(step, index) in recipe.steps" :key="index" cols="12">
        <v-card variant="tonal" class="rounded-xl">
          <v-card-text
            class="step-number-overlay d-flex align-center justify-center"
          >
            {{ index + 1 }}
          </v-card-text>
          <v-img
            :src="step.image || defaultPlaceholderImage"
            aspect-ratio="1.5"
          ></v-img>
          <v-card-text class="description-text">{{
            step.description
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      class="fixed-button rounded-pill"
      color="primary"
      width="110px"
      @click="goToRecipe(recipe.name)"
      >Übersicht</v-btn
    >
  </v-container>
</template>

<script>
import { useRecipesStore } from "@/store/data/recipes";

export default {
  props: ["recipeName"],
  setup() {
    const recipesStore = useRecipesStore();
    return { recipesStore };
  },
  data() {
    return {
      defaultPlaceholderImage: "./img/Recipes/placeholder.png", // Add the path to your placeholder image here
    };
  },
  computed: {
    recipe() {
      return this.recipesStore.recipes.find((r) => r.name === this.recipeName);
    },
  },
  methods: {
    goToRecipe(recipeName) {
      this.$router.push({ name: "detailedRecipe", params: { recipeName } });
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
.step-number-overlay {
  position: absolute;
  top: 10px; /* Adjust as needed */
  left: 10px; /* Adjust as needed */
  z-index: 1; /* Ensure it's above the image */
  background-color: #ffa200; /* Background color */
  border-radius: 50%; /* Round shape */
  width: 30px; /* Adjust size as needed */
  height: 30px;
  font-size: 18px;
}
.description-text {
  white-space: pre-line; /* or pre-wrap */
}
</style>
