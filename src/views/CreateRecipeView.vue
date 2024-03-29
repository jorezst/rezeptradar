<template>
  <v-container>
    <!-- Form for the Main Information -->
    <v-form ref="mainForm">
      <v-card variant="tonal" class="rounded-xl mb-4">
        <v-card-title class="mb-1"> Hauptinformationen </v-card-title>
        <v-card-item>
          <v-text-field
            v-model="recipe.name"
            density="comfortable"
            rounded
            label="Rezept Name"
            :rules="nameRules"
            variant="outlined"
            clearable=""
          ></v-text-field>
          <v-text-field
            v-model="recipe.mainImage"
            density="comfortable"
            rounded
            label="Link zum Bild"
            :rules="mainImageRules"
            variant="outlined"
            clearable=""
          ></v-text-field>
          <v-text-field
            v-model="recipe.time"
            density="comfortable"
            rounded
            label="Time (minutes)"
            :rules="timeRules"
            type="number"
            variant="outlined"
            clearable=""
          ></v-text-field>
          <v-select
            v-model="recipe.categories"
            density="comfortable"
            label="Kategorien"
            :items="categoriesStore.categories"
            :rules="categoryRules"
            multiple=""
            rounded
            variant="outlined"
            chips=""
            clearable=""
          ></v-select>
        </v-card-item>
      </v-card>
    </v-form>
    <!-- Form for all Ingredients -->
    <v-form ref="ingredientForm">
      <v-card variant="tonal" class="rounded-xl mb-4">
        <v-card-title class="mb-1"> Zutaten </v-card-title>
        <!-- Input fields -->
        <v-card-item>
          <v-text-field
            v-model="newIngredient.name"
            density="comfortable"
            rounded
            label="Zutat"
            :rules="ingredientNameRules"
            variant="outlined"
            clearable=""
          ></v-text-field>
          <v-row>
            <v-col>
              <v-text-field
                v-model="newIngredient.amount"
                density="comfortable"
                rounded
                label="Menge"
                :rules="ingredientAmountRules"
                type="number"
                variant="outlined"
                clearable=""
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="newIngredient.unit"
                density="comfortable"
                rounded
                label="Einheit"
                :items="units"
                :rules="ingredientUnitRules"
                variant="outlined"
              ></v-select>
            </v-col>
          </v-row>
          <v-btn
            block=""
            class="rounded-xl mb-2"
            color="primary"
            @click="addIngredient"
            >Zutat hinzufügen</v-btn
          >
        </v-card-item>
        <!-- Reactive Ingredient List -->
        <v-card-item>
          <v-card-title class="mb-1"> Aktuelle Zutaten</v-card-title>
          <v-list density="">
            <v-list-item
              v-for="(ingredient, index) in recipe.ingredients"
              :key="index"
            >
              <v-list-item-content>
                • {{ ingredient.amount }} {{ ingredient.unit }}
                {{ ingredient.name }}
              </v-list-item-content>
              <v-icon color="primary" @click="removeIngredient(index)"
                >mdi-delete</v-icon
              >
            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </v-form>
    <!-- Form for all Utensils -->
    <v-form ref="utensilForm">
      <v-card variant="tonal" class="rounded-xl mb-4">
        <v-card-title class="mb-1">Utensilien</v-card-title>
        <!-- Input fields -->
        <v-card-item>
          <v-text-field
            v-model="newUtensil"
            density="comfortable"
            rounded
            label="Utensil"
            :rules="utensilNameRules"
            variant="outlined"
            clearable=""
          ></v-text-field>
          <v-btn
            block=""
            class="rounded-xl mb-2"
            color="primary"
            @click="addUtensil"
          >
            Utensil hinzufügen
          </v-btn>
        </v-card-item>
        <!-- Reactive Utensil List -->
        <v-card-item>
          <v-card-title class="mb-1"> Aktuelle Utensilien</v-card-title>
          <v-list density="">
            <v-list-item
              v-for="(utensils, index) in recipe.utensils"
              :key="index"
            >
              <v-list-item-content> • {{ utensils }} </v-list-item-content>
              <v-icon color="primary" @click="removeUtensil(index)"
                >mdi-delete</v-icon
              >
            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </v-form>
    <!-- Form for all Steps -->
    <v-form ref="stepForm">
      <v-card variant="tonal" class="rounded-xl mb-12">
        <v-card-title class="mb-1">Schritte</v-card-title>
        <!-- Input fields -->
        <v-card-item>
          <v-textarea
            v-model="newStep.description"
            label="Schritt"
            :rules="stepRules"
            variant="outlined"
            clearable=""
            rows="3"
            auto-grow
          ></v-textarea>
          <v-text-field
            v-model="newStep.image"
            density="comfortable"
            rounded
            label="Link zum Bild"
            :rules="stepImageRules"
            variant="outlined"
            clearable=""
          ></v-text-field>
          <v-btn
            block=""
            class="rounded-xl mb-2"
            color="primary"
            @click="addStep"
          >
            Schritt hinzufügen
          </v-btn>
        </v-card-item>
        <!-- Reactive Steps List -->
        <v-card-item>
          <v-card-title class="mb-1">Aktuelle Schritte</v-card-title>
          <v-list density="">
            <v-list-item v-for="(steps, index) in recipe.steps" :key="index">
              <v-list-item-content>
                <v-img class="rounded-xl" :src="steps.image"></v-img>
                • {{ steps.description }}
                <v-icon color="primary" @click="removeStep(index)"
                  >mdi-delete</v-icon
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </v-form>
    <!-- Submits Form to RecipeStore -->
    <v-btn block="" color="primary" class="rounded-xl mb-2" @click="submitForm"
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

    // To Reset the different input fields to null
    const isValidationTriggered = ref(false); // Flag to control validation
    const newIngredient = ref({ name: "", amount: "", unit: "" });
    const newUtensil = ref("");
    const newStep = ref({ description: "", image: "" });

    // All the rules for validation of Input
    const nameRules = [
      (v) => !!v || "Name ist erforderlich",
      (v) =>
        (v && v.length <= 40) ||
        "Name darf nicht länger als 40 Zeichen lang sein",
      (v) => (v && v.length >= 2) || "Name muss mindestens 2 Zeichen lang sein",
    ];

    const mainImageRules = [
      (v) => !!v || "Bild ist erforderlich",
      (v) => {
        const pattern =
          /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w-._~:/?#[\]@!$&'()*+,;=]*)?\.(jpg|jpeg|png|gif|bmp|svg)(\?.*)?$/i;
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
      (v) =>
        !isValidationTriggered.value || !!v || "Zutatenname ist erforderlich",
      (v) =>
        !isValidationTriggered.value ||
        (v && v.length <= 40) ||
        "Zutatenname darf nicht länger als 40 Zeichen sein",
      (v) =>
        !isValidationTriggered.value ||
        (v && v.length >= 2) ||
        "Zutatenname muss mindestens 2 Zeichen lang sein",
    ];

    const ingredientAmountRules = [
      (v) => !isValidationTriggered.value || !!v || "Menge ist erforderlich",
      (v) =>
        !isValidationTriggered.value ||
        !isNaN(v) ||
        "Menge muss eine Zahl sein",
      (v) =>
        !isValidationTriggered.value ||
        (v && v > 0) ||
        "Menge muss größer als 0 sein",
    ];

    const ingredientUnitRules = [
      (v) => !isValidationTriggered.value || !!v || "Einheit ist erforderlich",
    ];

    const utensilNameRules = [
      (v) =>
        !isValidationTriggered.value ||
        !!v ||
        "Utensilienname ist erforderlich",
      (v) =>
        !isValidationTriggered.value ||
        (v && v.length <= 40) ||
        "Utensilienname darf nicht länger als 40 Zeichen sein",
      (v) =>
        !isValidationTriggered.value ||
        (v && v.length >= 2) ||
        "Utensilienname muss mindestens 2 Zeichen lang sein",
    ];

    const stepRules = [
      (v) =>
        !isValidationTriggered.value ||
        !!v ||
        "Schrittbeschreibung ist erforderlich",
      (v) =>
        !isValidationTriggered.value ||
        (v && v.length <= 600) ||
        "Schritt darf nicht länger als 600 Zeichen sein",
      (v) =>
        !isValidationTriggered.value ||
        (v && v.length >= 5) ||
        "Schritt darf nicht kürzer als 5 Zeichen sein",
    ];

    const stepImageRules = [
      (v) => {
        if (!v) {
          // If the input is empty, return true (no image required)
          return true;
        }
        // If there is input, perform the regex check
        const pattern =
          /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w-._~:/?#[\]@!$&'()*+,;=]*)?\.(jpg|jpeg|png|gif|bmp|svg)(\?.*)?$/i;
        return pattern.test(v) || "Falsche URL";
      },
    ];

    const addIngredient = async () => {
      isValidationTriggered.value = true; // Set flag to true when button is pressed
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
      isValidationTriggered.value = false; // Reset the flag when form is reset
      ingredientForm.value.resetValidation(); // Reset the validation state of the form
    };

    const removeIngredient = (index) => {
      recipe.value.ingredients.splice(index, 1);
    };

    const addUtensil = async () => {
      isValidationTriggered.value = true; // Set flag to true when button is pressed
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
      isValidationTriggered.value = false; // Reset the flag when form is reset
      utensilForm.value.resetValidation(); // Reset the validation state of the form
    };

    const removeUtensil = (index) => {
      recipe.value.utensils.splice(index, 1);
    };

    const addStep = async () => {
      isValidationTriggered.value = true; // Set flag to true when button is pressed
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
      isValidationTriggered.value = false; // Reset the flag when form is reset
      stepForm.value.resetValidation(); // Reset the validation state of the form
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
