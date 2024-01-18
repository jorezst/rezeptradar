<template>
  <v-container>
    <v-form ref="mainForm">
      <v-card variant="tonal" class="rounded-xl mb-4">
        <v-card-title class="mb-1"> Hauptinformationen </v-card-title>
        <v-card-item>
          <v-text-field
            density="comfortable"
            rounded
            label="Rezept Name"
            v-model="recipe.name"
            :rules="nameRules"
            variant="outlined"
            clearable
          ></v-text-field>
          <v-text-field
            density="comfortable"
            rounded
            label="Link zum Bild"
            v-model="recipe.mainImage"
            :rules="mainImageRules"
            variant="outlined"
            clearable
          ></v-text-field>
          <v-text-field
            density="comfortable"
            rounded
            label="Time (minutes)"
            v-model="recipe.time"
            :rules="timeRules"
            type="number"
            variant="outlined"
            clearable
          ></v-text-field>
          <v-select
            density="comfortable"
            label="Kategorien"
            v-model="recipe.categories"
            :items="categoriesStore.categories"
            :rules="categoryRules"
            multiple
            rounded
            variant="outlined"
            chips
            clearable
          ></v-select>
        </v-card-item>
      </v-card>
    </v-form>
    <v-form ref="ingredientForm">
      <v-card variant="tonal" class="rounded-xl mb-4">
        <v-card-title class="mb-1"> Zutaten </v-card-title>
        <v-card-item>
          <v-text-field
            density="comfortable"
            rounded
            label="Zutat"
            v-model="newIngredient.name"
            :rules="ingredientNameRules"
            variant="outlined"
            clearable
          ></v-text-field>
          <v-row>
            <v-col>
              <v-text-field
                density="comfortable"
                rounded
                label="Menge"
                v-model="newIngredient.amount"
                :rules="ingredientAmountRules"
                type="number"
                variant="outlined"
                clearable
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                density="comfortable"
                rounded
                label="Einheit"
                v-model="newIngredient.unit"
                :items="units"
                :rules="ingredientUnitRules"
                variant="outlined"
                clearable
              ></v-select>
            </v-col>
          </v-row>
          <v-btn
            block
            class="rounded-xl mb-2"
            color="primary"
            @click="addIngredient"
            >Zutat hinzufügen</v-btn
          >
        </v-card-item>
      </v-card>
    </v-form>
    <v-form ref="utensilForm">
      <v-card variant="tonal" class="rounded-xl mb-4">
        <v-card-title class="mb-1">Utensilien</v-card-title>
        <v-card-item>
          <v-text-field
            density="comfortable"
            rounded
            label="Utensil"
            v-model="newUtensil"
            :rules="utensilNameRules"
            variant="outlined"
            clearable
          ></v-text-field>
          <v-btn
            block
            class="rounded-xl mb-2"
            color="primary"
            @click="addUtensil"
          >
            Utensil hinzufügen
          </v-btn>
        </v-card-item>
      </v-card>
    </v-form>
    <v-form ref="stepForm">
      <v-card variant="tonal" class="rounded-xl mb-4">
        <v-card-title class="mb-1">Schritte</v-card-title>
        <v-card-item>
          <v-textarea
            label="Schritt"
            v-model="newStep.description"
            :rules="stepRules"
            variant="outlined"
            clearable
            textarea
            rows="3"
            auto-grow
          ></v-textarea>
          <v-text-field
            density="comfortable"
            rounded
            label="Link zum Bild"
            v-model="newStep.image"
            :rules="stepImageRules"
            variant="outlined"
            clearable
          ></v-text-field>
          <v-btn block class="rounded-xl mb-2" color="primary" @click="addStep">
            Schritt hinzufügen
          </v-btn>
        </v-card-item>
      </v-card>
    </v-form>
    <v-btn block color="primary" class="rounded-xl mb-2" @click="submitForm"
      >Rezept hinzufügen</v-btn
    >
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRecipesStore } from "@/store/data/recipes";
import { useCategoriesStore } from "@/store/data/categories.js";
import { units } from "@/store/data/units.js";
export default {
  setup() {
    const categoriesStore = useCategoriesStore();
    const recipesStore = useRecipesStore();
    const mainForm = ref(null);
    const ingredientForm = ref(null);
    const utensilForm = ref(null);
    const stepForm = ref(null);
    const recipe = ref({
      name: "",
      mainImage: "",
      time: "",
      ingredients: [],
      utensils: [],
      steps: [],
    });

    const newIngredient = ref({ name: "", amount: "", unit: "" });
    const newUtensil = ref("");
    const newStep = ref({ description: "", image: "" });

    const nameRules = [
      (v) => !!v || "Name ist erforderlich",
      (v) =>
        (v && v.length <= 40) ||
        "Name darf nicht länger als 40 Zeichen lang sein",
      (v) => (v && v.length >= 5) || "Name muss mindestens 5 Zeichen lang sein",
    ];

    const mainImageRules = [
      (v) => !!v || "Bild ist erforderlich",
      (v) => {
        const pattern =
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        return pattern.test(v) || "Falsche URL";
      },
    ];

    const timeRules = [
      (v) => !!v || "Zeit ist erforderlich",
      (v) =>
        (!isNaN(parseFloat(v)) && isFinite(v)) || "Zeit muss eine Nummer sein",
      (v) => v >= 1 || "Mindestens 1 Minute",
      (v) => v <= 600 || "Nicht mehr als 600 Minuten", // Example max limit
    ];

    const categoryRules = [
      (v) =>
        (Array.isArray(v) && v.length > 0) ||
        "Mindestens eine Kategorie auswählen",
      (v) =>
        (Array.isArray(v) && v.length <= 6) ||
        "Nicht mehr als 6 Kategorien erlaubt", // Example limit
    ];

    const ingredientNameRules = [
      (v) => !!v || "Zutatenname ist erforderlich",
      (v) =>
        (v && v.length <= 50) ||
        "Zutatenname darf nicht länger als 50 Zeichen sein",
      (v) =>
        (v && v.length >= 3) ||
        "Zutatenname muss mindestens 3 Zeichen lang sein",
    ];

    const ingredientAmountRules = [
      (v) => !!v || "Menge ist erforderlich",
      (v) => !isNaN(v) || "Menge muss eine Zahl sein",
      (v) => (v && v > 0) || "Menge muss größer als 0 sein",
    ];

    const ingredientUnitRules = [(v) => !!v || "Einheit ist erforderlich"];

    const utensilNameRules = [
      (v) => !!v || "Utensilienname ist erforderlich",
      (v) =>
        (v && v.length <= 50) ||
        "Utensilienname darf nicht länger als 50 Zeichen sein",
      (v) =>
        (v && v.length >= 3) ||
        "Utensilienname muss mindestens 3 Zeichen lang sein",
    ];

    const stepRules = [
      (v) => !!v || "Schrittbeschreibung ist erforderlich",
      (v) =>
        (v && v.length <= 600) ||
        "Schritt darf nicht länger als 600 Zeichen sein",
      (v) =>
        (v && v.length >= 10) ||
        "Schritt darf nicht kürzer als 10 Zeichen sein",
    ];

    const stepImageRules = [
      (v) => !!v || "Bild ist erforderlich",
      (v) => {
        const pattern =
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        return pattern.test(v) || "Falsche URL";
      },
    ];

    // Methods
    const addIngredient = async () => {
      const validationResult = await ingredientForm.value.validate();
      if (validationResult.valid) {
        // Add the new ingredient
        recipe.value.ingredients.push(newIngredient.value);
        resetIngredientForm();
      } else {
        console.log("Ingredient fields are not correctly filled");
      }
    };

    const resetIngredientForm = () => {
      newIngredient.value = { name: "", amount: "", unit: "" };
    };

    const removeIngredient = (index) => {
      recipe.value.ingredients.splice(index, 1);
    };

    const addUtensil = async () => {
      const validationResult = await utensilForm.value.validate();
      if (validationResult.valid) {
        recipe.value.utensils.push(newUtensil.value);
        resetUtensilForm();
      } else {
        console.log("Utensil name is required");
      }
    };

    const resetUtensilForm = () => {
      newUtensil.value = [""];
    };

    const removeUtensil = (index) => {
      recipe.value.utensils.splice(index, 1);
    };

    const addStep = async () => {
      const validationResult = await stepForm.value.validate();
      if (validationResult.valid) {
        recipe.value.steps.push(newStep.value);
        resetStepForm();
      } else {
        console.log("step fields are not correctly filled");
      }
    };

    const resetStepForm = () => {
      newStep.value = { description: "", image: "" };
    };

    const removeStep = (index) => {
      recipe.value.steps.splice(index, 1);
    };

    const submitForm = () => {
      if (recipe.value.ingredients.length === 0) {
        console.log("At least one ingredient is required");
        return;
      }

      if (recipe.value.utensils.length === 0) {
        console.log("At least one utensil is required");
        return;
      }

      if (recipe.value.steps.length === 0) {
        console.log("At least one utensil is required");
        return;
      }

      mainForm.value.validate().then((validationResult) => {
        if (!validationResult.valid) {
          console.log("Form is invalid", validationResult.errors);
          // Handle invalid form here
        } else {
          // If the form is valid, proceed with adding the recipe
          recipesStore.addRecipe(recipe.value);
          // Optionally reset the form or provide other user feedback
        }
      });
    };

    return {
      recipe,
      categoriesStore,
      units,
      newIngredient,
      newUtensil,
      newStep,
      addIngredient,
      resetIngredientForm,
      removeIngredient,
      addUtensil,
      resetUtensilForm,
      removeUtensil,
      addStep,
      resetStepForm,
      removeStep,
      submitForm,
      mainForm,
      ingredientForm,
      utensilForm,
      stepForm,
      nameRules,
      mainImageRules,
      timeRules,
      categoryRules,
      ingredientNameRules,
      ingredientAmountRules,
      ingredientUnitRules,
      utensilNameRules,
      stepRules,
      stepImageRules,
    };
  },
};
</script>
