<template>
  <v-row class="search-bar">
    <v-col>
      <v-text-field
        bg-color="background"
        color="primary"
        variant="outlined"
        rounded
        :value="searchQuery"
        label="Rezept suchen"
        prepend-inner-icon="mdi-magnify"
        @input="handleInput"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchBar",
  emits: ["update-search"],
  setup(props, { emit }) {
    const searchQuery = ref("");

    // Updated method to handle input and emit the event
    const handleInput = (event) => {
      // Extracting the value from the event object
      const value = event.target.value;
      searchQuery.value = value;
      emit("update-search", value);
    };

    return { searchQuery, handleInput };
  },
};
</script>

<style>
.search-bar {
  position: sticky;
  top: 58px;
  z-index: 1000; /* Ensures the search bar stays on top of other content */
}
</style>
