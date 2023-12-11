<template>
  <CookingMode />
</template>

<script>
import { defineComponent } from "vue";
import CookingMode from "@/components/CookingMode.vue";

// Components

export default defineComponent({
  name: "CookModeView",

  components: { CookingMode },
});
</script>
