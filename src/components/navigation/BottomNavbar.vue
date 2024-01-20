<template>
  <v-container>
    <v-bottom-navigation :elevation="24" color="primary" grow>
      <v-btn class="nav-item" value="home" to="/">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn class="nav-item" to="/Rezept anlegen">
        <v-icon>mdi-plus</v-icon>
        <span>Hinzufügen</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script></script>
