<template>
  <v-row>
    <v-col>
      <!-- Main information Display -->
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
</template>

<script>
import { computed } from "vue";
import { useRecipesStore } from "@/store/data/recipes";

export default {
  props: ["recipeName"],
  setup(props) {
    const recipesStore = useRecipesStore();
    const recipe = computed(() =>
      recipesStore.recipes.find((r) => r.name === props.recipeName)
    );

    return { recipe };
  },
};
</script>

<style scoped></style>
