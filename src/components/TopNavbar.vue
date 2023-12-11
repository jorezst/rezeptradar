<script setup></script>

<template>
  <v-app-bar app :elevation="0">
    <v-app-bar-nav-icon @click.stop="toggleSidebar" />
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon icon class="settings-icon" to="/Settings">
      <v-icon>mdi-cog</v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="sidebar" app> </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>

<style>
.settings-icon {
  margin-right: 16px; /* Adjust the margin as needed */
}
</style>
