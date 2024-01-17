<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn color="primary" @click="toggleTheme">Toggle Theme</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-form @submit.prevent="addCategory">
          <v-text-field
            label="New Category"
            v-model="newCategory"
            outlined
            required
          ></v-text-field>
          <v-btn type="submit" color="success">Add Category</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
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
import { useCategoriesStore } from "@/store/data/categories";
export default {
  data() {
    return {
      newCategory: "",
    };
  },
  methods: {
    addCategory() {
      const categoriesStore = useCategoriesStore();
      categoriesStore.addCategory(this.newCategory);
      this.newCategory = "";
    },
  },
};
</script>
