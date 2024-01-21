<template>
  <!-- Portion Selector -->
  <v-row>
    <v-col>
      <h4>Portionsgröße</h4>
      <v-slider
        v-model="portionCount"
        color="primary"
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
        <v-list density="">
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
  </v-row>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: ["recipe"],
  setup(props) {
    const portionCount = ref(2); // Default portions

    const adjustedIngredients = computed(() => {
      if (!props.recipe || !props.recipe.ingredients) return [];

      // Adjust ingredient amounts based on portion count
      return props.recipe.ingredients.map((ingredient) => ({
        ...ingredient,
        amount: (ingredient.amount / 2) * portionCount.value, // Adjust based on portionCount
      }));
    });

    return { portionCount, adjustedIngredients };
  },
};
</script>

<style scoped></style>
