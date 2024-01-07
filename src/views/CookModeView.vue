<script>
import Hammer from "hammerjs";
export default {
  data() {
    return {
      currentStep: 0,
      totalSteps: 7,
      imagePaths: {
        0: "./img/Kochmodus/schritt1.png",
        1: "./img/Kochmodus/schritt1.png",
        2: "./img/Kochmodus/schritt1.png",
        3: "./img/Kochmodus/schritt1.png",
        4: "./img/Kochmodus/schritt1.png",
        5: "./img/Kochmodus/schritt1.png",
        6: "./img/Kochmodus/schritt1.png",
        7: "./img/Kochmodus/schritt1.png",
      },
      utensils: {
        1: ["Wok"],
        2: ["Kochlöffel"],
      },
      ingredients: {
        1: ["200g Asia-Nudeln"],
        2: ["1 Karotte", "1 Paprika", "1 Zwiebel"],
        3: ["2 EL Sojasoße", "1 EL Sesamöl", "1 TL Ingwer (gerieben)"],
        4: ["Salz nach Geschmack", "Pfeffer nach Geschmack"],
      },
      descriptions: {
        1: "Koche die Nudeln nach Packungsanweisung. Abgießen und beiseite stellen.",
        2: "Schneide das Gemüse in dünne Streifen.",
        3: "Erhitze das Sesamöl im Wok. Brate die Zwiebeln und den Ingwer an, bis sie duften.",
        4: "Füge das geschnittene Gemüse hinzu und brate es kurz an. Gib die Nudeln hinzu.",
        5: "Gieße die Sojasoße über die Nudeln und das Gemüse. Würze mit Salz und Pfeffer nach Geschmack.",
        6: "Rühre alles gut um, bis die Nudeln gleichmäßig mit Gemüse und Soße bedeckt sind.",
        7: "Serviere die gebratenen Nudeln sofort. Guten Appetit!",
      },
      overview: {
        time: "30 Minuten",
        materials: ["Allgemeines Material 1", "Allgemeines Material 2"],
        ingredients: ["Allgemeine Zutat 1", "Allgemeine Zutat 2"],
        description: "Übersicht über das Rezept.",
      },
    };
  },
  methods: {
    getStepLabel(step) {
      return step === 0 ? "Übersicht" : `Schritt ${step}`;
    },
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
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

      <v-card-text class="card-text" v-if="currentStep === 0">
        <p><strong>Benötigte Zeit:</strong> {{ overview.time }}</p>
        <p><strong>Materialien:</strong></p>
        <ul>
          <li v-for="(material, index) in overview.materials" :key="index">
            {{ material }}
          </li>
        </ul>
        <p><strong>Zutaten:</strong></p>
        <ul>
          <li v-for="(ingredient, index) in overview.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
        <p>{{ overview.description }}</p>
      </v-card-text>

      <v-card-text class="card-text" v-else>
        <div class="ingredients-utensils">
          <div
            class="ingredients"
            v-if="
              ingredients[currentStep] && ingredients[currentStep].length > 0
            "
          >
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

          <div
            class="utensils"
            v-if="utensils[currentStep] && utensils[currentStep].length > 0"
          >
            <v-subheader>Utensilien:</v-subheader>
            <ul>
              <li
                v-for="(utensil, index) in utensils[currentStep]"
                :key="index"
              >
                {{ utensil }}
              </li>
            </ul>
          </div>
        </div>

        <v-subheader v-if="descriptions[currentStep]"
          >Beschreibung:</v-subheader
        >
        <div>
          <p v-if="descriptions[currentStep]">
            {{ descriptions[currentStep] }}
          </p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.cook-mode-container {
  height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom) - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.desktop-buttons {
  display: none;
}

.card-container {
  width: 100%;
  flex-grow: 1;
  padding: 20px;
  margin: 0 20px;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: none !important;
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

.ingredients-utensils {
  display: flex;
}

.ingredients,
.utensils {
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
  margin-top: 10px;
}

.card-container li {
  font-size: 14px;
  margin-bottom: 5px;
}

.card-text {
  padding: 10px;
}

.card-container p {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--v-text);
}

/* Media Query für Mobile-Ansicht */
@media (max-width: 768px) {
  .cook-mode-container {
    margin: 0;
    padding: 0;
  }

  .card-container.v-card--variant-elevated {
    box-shadow: none !important;
    border: none !important;
  }
}

/* Media Query für Desktop-Ansicht */
@media (min-width: 768px) {
  .cook-mode-container {
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
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
</style>
