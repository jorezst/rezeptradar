<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <BottomNavbar />
  </v-app>
</template>

<script>
import BottomNavbar from "@/components/BottomNavbar.vue";
export default {
  name: "App",
  components: { BottomNavbar },
  data: () => ({
    //
  }),
};
</script>
