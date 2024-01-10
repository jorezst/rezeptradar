<template>
    <div>
      <h1>{{ recipe.title }}</h1>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
    </div>
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