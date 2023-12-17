<template>
  <SelectDishType />
  <CreatingSteps />
  <UtensilienDropdown />
  <PortionChange />
</template>

<script>
import { defineComponent } from "vue";
import SelectDishType from "@/components/SelectDishType.vue";
import CreatingSteps from "@/components/CreatingSteps.vue";
import UtensilienDropdown from "@/components/UtensilienDropdown.vue";
import PortionChange from "@/components/PortionChange.vue";

// Components

export default defineComponent({
  name: "CreateRecipeView",

  components: {
    UtensilienDropdown,
    SelectDishType,
    CreatingSteps,
    PortionChange,
  },
});
</script>
