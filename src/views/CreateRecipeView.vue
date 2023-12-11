<template>
  <SelectDishType />
  <CreatingSteps />
  <Utensilien />
</template>

<script>
import { defineComponent } from "vue";
import SelectDishType from "@/components/SelectDishType.vue";
import CreatingSteps from "@/components/CreatingSteps.vue";
import Utensilien from "@/components/Utensilien.vue";

// Components

export default defineComponent({
  name: "CreateRecipeView",

  components: {Utensilien, SelectDishType, CreatingSteps },
});
</script>
