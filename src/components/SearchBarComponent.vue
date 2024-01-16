<template>
  <v-row class="search-bar">
    <v-col>
      <v-text-field
        bg-color="background"
        color="primary"
        variant="outlined"
        rounded
        v-model="searchQuery"
        label="Rezepte suchen"
        @input="updateSearch"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SearchBarComponent",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    updateSearch() {
      this.$emit("search-updated", this.searchQuery);
    },
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
