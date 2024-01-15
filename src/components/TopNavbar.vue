<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

// You can also use a computed property if the title needs to be reactive
const pageTitle = computed(() => route.meta.title || "Default Title");
</script>

<template>
  <v-app-bar app :elevation="0" color="background">
    <!-- Back Arrow -->
    <v-app-bar-nav-icon icon @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-app-bar-nav-icon>

    <!-- Site Title -->
    <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

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
      this.$router.push("/Einstellungen");
    },
  },
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
