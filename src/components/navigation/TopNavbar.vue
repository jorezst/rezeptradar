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
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const pageTitle = computed(() => route.meta.title || "Default Title");

    const goBack = () => {
      router.go(-1);
    };

    const goToSettings = () => {
      router.push("/einstellungen");
    };

    // Return all reactive states, computed properties, and methods
    return { pageTitle, goBack, goToSettings };
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
