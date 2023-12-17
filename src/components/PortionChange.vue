<script>
export default {
  data() {
    return {
      portion: 0,
    };
  },
  methods: {
    increment() {
      this.portion += 1;
    },
    decrement() {
      if (this.portion > 0) {
        this.portion -= 1;
      }
    },
  },
};
</script>

<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-icon @click="decrement">mdi-minus</v-icon>
      </v-col>

      <v-col>
        <span>{{ portion }}</span>
      </v-col>

      <v-col>
        <v-icon @click="increment">mdi-plus</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
