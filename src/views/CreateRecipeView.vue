<template>
  <v-col>
    <v-text-field ref="recipeNameInput" label="Rezeptname vergeben">
    </v-text-field>
  </v-col>
  <SelectDishType />
  <CreatingSteps />
  <UtensilienDropdown />
  <PortionChange />
  <v-row align="center" justify="center">
    <v-col cols="auto">
      <v-btn size="large" @click="uploadRecipe">Upload Recipe</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";
import SelectDishType from "@/components/SelectDishType.vue";
import CreatingSteps from "@/components/CreatingSteps.vue";
import UtensilienDropdown from "@/components/UtensilienDropdown.vue";
import PortionChange from "@/components/PortionChange.vue";
import { recipes } from "@/store/data/recipes.js";

// Components

export default defineComponent({
  name: "CreateRecipeView",

  components: {
    UtensilienDropdown,
    SelectDishType,
    CreatingSteps,
    PortionChange,
  },

  methods: {
    uploadRecipe() {
      //-------------------fehler könnte sein dass recipes in array sind morgen schauen
      const recipeStore = recipes();
      try {
        // Hier kommt dein bestehender Code
        recipeStore.setRecipeName(this.$refs.recipeNameInput.model);
        // Weitere Logik...
      } catch (error) {
        console.error("Fehler beim Hochladen des Rezepts:", error);
      }
    },
  },
});
</script>
