<script>
import Hammer from "hammerjs";
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 4,
      imagePaths: {
        1: "./img/Kochmodus/schritt1.png",
        2: "./img/Kochmodus/schritt1.png",
        3: "./img/Kochmodus/schritt1.png",
        4: "./img/Kochmodus/schritt1.png",
      },
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
        4: "Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.Beschreibung für Schritt 4.",
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
    handleSwipe(direction) {
      if (direction === "left") {
        this.nextStep();
      } else if (direction === "right") {
        this.prevStep();
      }
    },
  },
  mounted() {
    const el = this.$el;
    const hammer = new Hammer(el);
    hammer.on("swiperight", () => this.handleSwipe("right"));
    hammer.on("swipeleft", () => this.handleSwipe("left"));
  },
};
</script>

<template>
  <div class="cook-mode-container" v-swipe="handleSwipe">
    <div class="desktop-buttons">
      <v-btn class="nav-button" @click="prevStep" :disabled="currentStep === 1">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn
        class="nav-button"
        @click="nextStep"
        :disabled="currentStep === totalSteps"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <v-card class="card-container" v-if="currentStep !== null">
      <v-card-title class="step-title">{{
        getStepLabel(currentStep)
      }}</v-card-title>

      <v-img
        :src="imagePaths[currentStep]"
        class="step-image"
        alt="Step Image"
      ></v-img>

      <v-divider class="divider"></v-divider>

      <v-card-text class="card-text">
        <div class="ingredients-materials">
          <div class="ingredients">
            <v-subheader>Zutaten:</v-subheader>
            <ul>
              <li
                v-for="(ingredient, index) in ingredients[currentStep]"
                :key="index"
              >
                {{ ingredient }}
              </li>
            </ul>
          </div>

          <div class="materials">
            <v-subheader>Materialien:</v-subheader>
            <ul>
              <li
                v-for="(material, index) in materials[currentStep]"
                :key="index"
              >
                {{ material }}
              </li>
            </ul>
          </div>
        </div>

        <v-subheader>Beschreibung:</v-subheader>
        <div class="scrollable-description">
          <p>{{ descriptions[currentStep] }}</p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.cook-mode-container {
  height: calc(100vh - 64px - 56px - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

.desktop-buttons {
  display: none;
}

.card-container {
  width: 100%;
  flex-grow: 1;
  margin: 0 20px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Media Query für Desktop-Ansicht */
@media (min-width: 768px) {
  .cook-mode-container {
    flex-direction: column;
    align-items: center;
  }

  .card-container {
    width: calc(100% - 40px - 120px);
  }

  .desktop-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    padding: 20px;
  }

  .desktop-buttons .nav-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
}

.nav-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.step-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--v-primary-base);
}

.step-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.divider {
  background-color: var(--v-primary-base);
}

.ingredients-materials {
  display: flex;
}

.ingredients,
.materials {
  flex: 1;
}

.card-container v-subheader {
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  color: var(--v-text-dense);
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

.card-text {
  padding: 10px;
}

.scrollable-description {
  overflow-y: auto;
  max-height: 100px;
}

.card-container p {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px; /* Füge diese Zeile hinzu, um Platz für Scrollleiste zu lassen */
  color: var(--v-text);
  overflow-y: auto;
}
</style>
