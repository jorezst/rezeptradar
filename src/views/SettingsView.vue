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
            v-model="newCategory"
            label="New Category"
            outlined
            required
          ></v-text-field>
          <v-btn type="submit" color="success">Add Category</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { useCategoriesStore } from "@/store/data/categories";

export default {
  setup() {
    const theme = useTheme();
    const categoriesStore = useCategoriesStore();
    const newCategory = ref("");

    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark
        ? "myCustomLightTheme"
        : "myCustomDarkTheme";
    }

    function addCategory() {
      categoriesStore.addCategory(newCategory.value);
      newCategory.value = "";
    }

    return { newCategory, toggleTheme, addCategory };
  },
};
</script>
