<template>
  <v-btn> Recipe </v-btn>
  <SelectDishType />
  <CreatingSteps />
</template>

<script>
import { defineComponent } from "vue";
import SelectDishType from "@/components/SelectDishType.vue";
import CreatingSteps from "@/components/CreatingSteps.vue";

// Components

export default defineComponent({
  name: "CreateRecipeView",

  components: { SelectDishType, CreatingSteps },
});
</script>
