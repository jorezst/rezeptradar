<template>
  <CookingMode />
</template>

<script setup></script>

<script>
import CookingMode from "@/components/CookingMode.vue";
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "CookModeView",

  components: { CookingMode },
});
</script>
