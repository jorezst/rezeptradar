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
</template>

<script>
export default {
  data: () => ({
    items: ["Frühstück", "Mittag", "Abendessen", "Dessert"],
    value: "Frühstück",
  }),
};
</script>
