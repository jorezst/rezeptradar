<template>
  <v-container v-if="recipe">
    <MainInfo :recipe-name="recipeName" />
    <IngredientInfo :recipe="recipe" />
    <UtensilInfo :recipe="recipe" />
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
import { useRecipesStore } from "@/store/data/recipes";
import MainInfo from "@/components/detailed/MainInfo.vue";
import IngredientInfo from "@/components/detailed/IngredientInfo.vue";
import UtensilInfo from "@/components/detailed/UtensilInfo.vue";
import { useRouter } from "vue-router";

export default {
  components: { UtensilInfo, IngredientInfo, MainInfo },
  props: ["recipeName"],
  setup() {
    const router = useRouter();
    const recipesStore = useRecipesStore();

    const goToRecipeSteps = (recipeName) => {
      router.push(`/rezept-schritte/${recipeName}`);
    };

    return {
      recipesStore,
      goToRecipeSteps,
    };
  },
  computed: {
    recipe() {
      return this.recipesStore.recipes.find((r) => r.name === this.recipeName);
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
