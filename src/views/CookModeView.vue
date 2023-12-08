<template>
  <div class="cook-mode-container">
    <v-btn class="nav-button" @click="prevStep" :disabled="currentStep === 1"
      ><v-icon>mdi-chevron-left</v-icon></v-btn
    >

    <v-card class="card-container" v-if="currentStep !== null">
      <v-card-title>{{ getStepLabel(currentStep) }}</v-card-title>
      <v-card-text>
        <v-subheader>Materialien:</v-subheader>
        <ul>
          <li v-for="(material, index) in materials[currentStep]" :key="index">
            {{ material }}
          </li>
        </ul>

        <v-subheader>Zutaten:</v-subheader>
        <ul>
          <li
            v-for="(ingredient, index) in ingredients[currentStep]"
            :key="index"
          >
            {{ ingredient }}
          </li>
        </ul>

        <v-subheader>Beschreibung:</v-subheader>
        <p>{{ descriptions[currentStep] }}</p>
      </v-card-text>
    </v-card>

    <v-btn
      class="nav-button"
      @click="nextStep"
      :disabled="currentStep === totalSteps"
      ><v-icon>mdi-chevron-right</v-icon></v-btn
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CookModeView",
  data() {
    return {
      currentStep: 1,
      totalSteps: 4,
      materials: {
        1: ["Material 1a", "Material 1b"],
        2: ["Material 2a", "Material 2b"],
        3: ["Material 3a", "Material 3b"],
        4: ["Material 4a", "Material 4b", "Material 4c"],
      },
      ingredients: {
        1: ["Zutat 1a", "Zutat 1b"],
        2: ["Zutat 2a", "Zutat 2b"],
        3: ["Zutat 3a", "Zutat 3b", "Zutat 3c"],
        4: ["Zutat 4a", "Zutat 4b"],
      },
      descriptions: {
        1: "Beschreibung für Schritt 1.",
        2: "Beschreibung für Schritt 2.",
        3: "Beschreibung für Schritt 3.",
        4: "Beschreibung für Schritt 4.",
      },
    };
  },
  methods: {
    getStepLabel(step) {
      return `Schritt ${step}`;
    },
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
});
</script>

<style scoped>
.cook-mode-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

.nav-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  min-width: 0;
}

.card-container {
  flex-grow: 1;
  margin: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
}

.card-container v-card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-container v-subheader {
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}

.card-container ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.card-container li {
  font-size: 14px;
  margin-bottom: 5px;
}

.card-container p {
  font-size: 14px;
  margin-top: 10px;
  color: #555;
}
</style>
