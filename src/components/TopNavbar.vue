<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const pageTitle = computed(() => route.meta.title || "Default Title");
</script>

<template>
  <v-app-bar app :elevation="0" color="background">
    <!-- Back Arrow Icon -->
    <v-btn icon @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <!-- Page Title -->
    <v-toolbar-title class="text-center"> {{ pageTitle }} </v-toolbar-title>

    <!-- Settings Icon -->
    <v-btn icon @click="goToSettings">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    titleStyle() {
      const maxWidth = window.innerWidth - 48 * 2 - 40; // 40px for some additional padding
      return {
        "max-width": `${maxWidth}px`,
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
      };
    },
  },
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
.text-center {
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
}
</style>
