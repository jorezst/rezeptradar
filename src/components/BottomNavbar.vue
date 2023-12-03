<script setup></script>

<template>
  <v-container>
    <v-bottom-navigation :elevation="0">
      <v-btn value="home" to="/">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn value="search">
        <v-icon>mdi-magnify</v-icon>
        <span>Search</span>
      </v-btn>

      <v-btn value="shopping-list" to="/cookMode">
        <v-icon>mdi-cart</v-icon>
        <span>Shopping List</span>
      </v-btn>

      <v-btn value="add" to="/createRecipe">
        <v-icon>mdi-plus</v-icon>
        <span>Add</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<style scoped></style>
