<template>
  <v-btn color="primary" @click="toggleTheme">Theme umschalten</v-btn>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "myCustomLightTheme"
    : "myCustomDarkTheme";
}
</script>

<script>
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "SettingsView",
  components: {},
});
</script>

<style scoped></style>
