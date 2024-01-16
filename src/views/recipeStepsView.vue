<template>
  <v-container v-if="recipe">
    <!-- Steps displayed one after another using Vuetify components -->
    <v-row class="mb-4" v-for="(step, index) in recipe.steps" :key="index">
      <v-card class="rounded-xl">
        <v-col cols="12">
          <v-img
            :src="step.image"
            aspect-ratio="1.5"
            class="mb-2 rounded-xl"
          ></v-img>
          <p>{{ step.description }}</p>
        </v-col></v-card
      >
    </v-row>
    <v-btn
      class="fixed-button rounded-pill"
      color="primary"
      @click="goToRecipe(recipe.name)"
      >Übersicht</v-btn
    >
  </v-container>
</template>

<script>
import { recipes } from "@/store/data/recipes";

export default {
  props: ["recipeName"],
  computed: {
    recipe() {
      return recipes.find((r) => r.name === this.recipeName);
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
</style>
