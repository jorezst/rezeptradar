<template>
  <v-btn>Home</v-btn>
  <ProbeRezept />
</template>

<script>
import ProbeRezept from "@/components/ProbeRezept.vue";
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "HomeView",
  components: { ProbeRezept },
});
</script>
