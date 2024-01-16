<template>
  <v-form ref="form" v-model="valid">
    <v-text-field
      label="Recipe Name"
      v-model="recipe.name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field label="Image URL" v-model="recipe.mainImage"></v-text-field>
    <v-text-field
      label="Time (minutes)"
      v-model="recipe.time"
      type="number"
    ></v-text-field>

    <v-select
      label="Categories"
      v-model="recipe.categories"
      :items="categories"
      multiple
      chips
    ></v-select>

    <div v-for="(ingredient, index) in recipe.ingredients" :key="index">
      <v-text-field
        label="Ingredient Name"
        v-model="ingredient.name"
      ></v-text-field>
      <v-text-field
        label="Amount"
        v-model="ingredient.amount"
        type="number"
      ></v-text-field>
      <v-select
        label="Unit"
        v-model="ingredient.unit"
        :items="units"
      ></v-select>
      <v-btn icon @click="removeIngredient(index)"
        ><v-icon>mdi-close</v-icon></v-btn
      >
    </div>
    <v-btn @click="addIngredient">Add Ingredient</v-btn>

    <div v-for="(step, index) in recipe.steps" :key="index">
      <v-textarea
        label="Step Description"
        v-model="step.description"
      ></v-textarea>
      <v-text-field label="Step Image URL" v-model="step.image"></v-text-field>
      <v-btn icon @click="removeStep(index)"><v-icon>mdi-close</v-icon></v-btn>
    </div>
    <v-btn @click="addStep">Add Step</v-btn>

    <v-btn @click="submitForm">Submit</v-btn>
  </v-form>
</template>

<script>
import { ref } from "vue";
import { recipes } from "@/store/data/recipes";
import { categories } from "@/store/data/categories.js";
import { units } from "@/store/data/units.js";

// Components

export default {
  setup() {
    const valid = ref(false);
    const form = ref(null);
    const recipe = ref({
      name: "",
      mainImage: "",
      time: 0,
      categories: [],
      ingredients: [{ name: "", amount: 0, unit: "" }],
      steps: [{ description: "", image: "" }],
    });

    const nameRules = [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 100) || "Name must be less than 100 characters",
    ];

    const recipesStore = recipes();

    const addIngredient = () => {
      recipe.value.ingredients.push({ name: "", amount: 0, unit: "" });
    };

    const removeIngredient = (index) => {
      recipe.value.ingredients.splice(index, 1);
    };

    const addStep = () => {
      recipe.value.steps.push({ description: "", image: "" });
    };

    const removeStep = (index) => {
      recipe.value.steps.splice(index, 1);
    };

    const submitForm = () => {
      if (form.value.validate()) {
        recipesStore.addRecipe(recipe.value);
        // Reset form or provide further user feedback
      }
    };

    return {
      recipe,
      categories,
      units,
      addIngredient,
      removeIngredient,
      addStep,
      removeStep,
      submitForm,
      valid,
      form,
      nameRules,
    };
  },
};
</script>
