<template>
  <v-btn> Recipe </v-btn>
  <SelectDishType />
</template>

<script>
import { defineComponent } from "vue";
import SelectDishType from "@/components/SelectDishType.vue";

// Components

export default defineComponent({
  name: "CreateRecipeView",

  components: { SelectDishType },
});
</script>
