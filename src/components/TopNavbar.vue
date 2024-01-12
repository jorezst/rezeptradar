<script setup></script>

<template>
  <v-app-bar app :elevation="0" color="background">
    <!-- Back Arrow -->
    <v-app-bar-nav-icon icon @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-app-bar-nav-icon>

    <!-- Search Bar with Search Icon -->
    <v-autocomplete
      :items="items"
      color="primary"
      auto-select-first
      class="flex-full-width"
      density="comfortable"
      menu-icon=""
      placeholder="Rezepte Suchen"
      prepend-inner-icon="mdi-magnify"
      rounded
      theme="myCustomLightTheme"
      variant="outlined"
    ></v-autocomplete>

    <!-- Settings icon -->
    <v-app-bar-nav-icon icon class="settings-icon" @click="goToSettings">
      <v-icon>mdi-cog</v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goBack() {
      // Add logic to go back to the previous site
      this.$router.go(-1);
    },
    goToSettings() {
      // Add logic to navigate to the /Settings site
      this.$router.push("/Settings");
    },
  },
  data: () => ({
    dialog: false,
    items: [
      {
        title: "test1",
      },
      {
        title: "test2",
      },
      {
        title: "test3",
      },
      {
        title: "test4",
      },
      {
        title: "test5",
      },
    ],
  }),
};
</script>

<style>
.flex-full-width {
  margin-top: 20px;
}
.settings-icon {
  margin-right: 16px; /* Adjust the margin as needed */
}
</style>
