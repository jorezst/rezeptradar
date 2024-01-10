<template>
    <v-card class="mx-auto" width="50%">
    <div>
      <h1>{{ recipe.title }}</h1>
      <h3>Lebensmittel</h3>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
      <h3>Utensilien</h3>
      <ul>
        <li v-for="(utensilien, index) in recipe.utensilien" :key="index">
          {{ utensilien }}
        </li>
      </ul>
      <h3>Schritte</h3>
      <ul>
        <li v-for="(schritte, index) in recipe.schritte" :key="index">
          {{ schritte }}
        </li>
      </ul>
      <!--<div>{{ recipe.schritte }}</div>-->
    </div>
    </v-card>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRecipeStore } from '@/stores/ProbeRezept';
  
  export default {
    name: 'RecipeView',
    setup() {
      const recipeStore = useRecipeStore();
      const recipe = ref(recipeStore.recipe);
  
      onMounted(() => {
        // Lade die Rezeptdaten beim Laden der Komponente
        recipe.value = recipeStore.recipe;
      });
  
      return { recipe };
    },
  };
  </script>