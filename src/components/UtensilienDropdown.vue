<script setup></script>

<template>
  <v-combobox
    multiple
    label="Utensilien"
    :items="[
      'Pfanne groß',
      'Pfanne klein',
      'Kochtopf groß',
      'Kochtopf klein',
      'Auflaufform',
      'Backblech',
      'Knoblauchpresse',
    ]"
  ></v-combobox>
</template>

<style scoped></style>
