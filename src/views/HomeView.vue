<template>
  <RecipesComponent />
</template>

<script>
import RecipesComponent from "@/components/RecipesComponent.vue";
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "HomeView",
  components: { RecipesComponent },
});
</script>
