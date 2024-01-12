<script setup></script>

<template>
  <v-container>
    <v-bottom-navigation :elevation="0" background-color="color">
      <v-btn class="nav-item" value="home" to="/">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn class="nav-item" to="/cookMode">
        <v-icon>mdi-chef-hat</v-icon>
        <span>Kochmodus</span>
      </v-btn>

      <v-btn class="nav-item" to="/createRecipe">
        <v-icon>mdi-plus</v-icon>
        <span>Hinzufügen</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<style scoped>
.nav-item {
  flex: 1; /* Distribute available space equally among items */
  min-width: 0; /* Allow items to shrink beyond their content width */
  text-align: center; /* Center text within the button */
}
</style>
