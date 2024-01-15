<template>
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-combobox
              v-model="value"
              :items="items"
              density="comfortable"
              label="Mahlzeit"
            ></v-combobox>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-textarea
            :counter="50"
            label="Schritt 1"
            density="comfortable"
            required
            hide-details
          ></v-textarea>
        </v-col>
        <v-col v-for="(textarea, index) in textareas" :key="index" cols="12">
          <v-col class="text-right">
            <v-btn icon="$close" size="xsmall" @click="deleteStep"></v-btn>
          </v-col>
          <v-textarea v-model="textarea.model" :label="`Schritt ${index + 2}`">
          </v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-btn icon="mdi-plus" size="small" @click="addStep"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>



  </template>
  
  <script>
export default {
  data() {
    items: ["Frühstück", "Mittag", "Abendessen", "Dessert"];
    value: "Frühstück";
    return {
      textareas: [],
      counter: 1,
    };
  },
  methods: {
    addStep() {
      this.textareas.push({ model: "" });
      this.counter++;
    },
    deleteStep() {
      this.textareas.splice(this.textareas, 1);
    },
  },
};
  </script>
  

  // So is auch kagge weil funktionen aller 4 Komponenten nicht in ein export default zusammengefügt werden können
  // bessere Variante wäre dann doch mit dem Zwischenspeicher denke ich 
   