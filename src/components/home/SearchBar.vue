<template>
  <!-- Search Bar Field -->
  <v-text-field
    class="search-bar"
    bg-color="background"
    color="primary"
    variant="outlined"
    rounded
    :value="searchQuery"
    label="Suchen"
    prepend-inner-icon="mdi-magnify"
    @input="handleInput"
  ></v-text-field>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchBar",
  emits: ["update-search"],
  setup(props, { emit }) {
    const searchQuery = ref();

    // method to handle input and emit the event
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
