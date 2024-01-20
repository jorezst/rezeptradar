<template>
  <v-row>
    <v-col>
      <v-card variant="tonal" class="rounded-xl">
        <v-card-title>Utensilien</v-card-title>
        <v-list density="">
          <v-list-item v-for="utensil in recipe.utensils" :key="utensil">
            <v-list-item-content>• {{ utensil }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["recipe"],
  setup(props) {
    const utensils = computed(() => props.recipe.utensils);

    return { utensils };
  },
};
</script>

<style scoped></style>
