<template>
  <v-container>
    <!-- Theme toggle -->
    <v-card variant="tonal" class="mb-4 rounded-xl">
      <v-card-title>Theme umschalten</v-card-title>
      <v-card-item>
        <v-row>
          <v-col>
            <v-btn
              class="rounded-xl mb-1"
              block
              color="primary"
              @click="toggleTheme"
              >Theme umschalten</v-btn
            >
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>

    <!-- Add new Categories -->
    <v-card variant="tonal" class="mb-4 rounded-xl">
      <v-card-title>Kategorien hinzufügen</v-card-title>
      <v-card-item>
        <v-row>
          <v-col>
            <v-form @submit.prevent="addCategory">
              <v-text-field
                rounded
                variant="outlined"
                v-model="newCategory"
                label="New Category"
                outlined
                required
              ></v-text-field>
              <v-btn class="rounded-xl mb-1" block type="submit" color="primary"
                >Kategorien hinzufügen</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
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

    // Changes the global theme
    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark
        ? "myCustomLightTheme"
        : "myCustomDarkTheme";
    }

    // Adds a category to the CategoryStore
    function addCategory() {
      categoriesStore.addCategory(newCategory.value);
      newCategory.value = "";
    }

    return { newCategory, toggleTheme, addCategory };
  },
};
</script>
