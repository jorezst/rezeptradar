<template>
  <v-btn> Home </v-btn>
  <v-btn @click="toggleTheme">toggle theme</v-btn>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<script>
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "HomeView",

  components: {},
});
</script>
