<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="searchQuery"
        label="Rezepte suchen"
        outlined
        clearable
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
