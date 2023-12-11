<template>
  <SelectDishType />
  <CreatingSteps />
  <UtensilienDropdown />
</template>

<script>
import { defineComponent } from "vue";
import SelectDishType from "@/components/SelectDishType.vue";
import CreatingSteps from "@/components/CreatingSteps.vue";
import UtensilienDropdown from "@/components/UtensilienDropdown.vue";

// Components

export default defineComponent({
  name: "CreateRecipeView",

  components: { UtensilienDropdown, SelectDishType, CreatingSteps },
});
</script>
