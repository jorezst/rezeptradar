<template>
  <v-btn> Home </v-btn>
  <v-btn @click="toggleTheme">toggle theme</v-btn>
  <CookingMode />
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
import CookingMode from "@/components/CookingMode.vue";

// Components

export default defineComponent({
  name: "CookModeView",

  components: { CookingMode },
});
</script>
