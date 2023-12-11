<template>
  <v-app>
    <TopNavbar />
    <v-main>
      <router-view />
    </v-main>
    <BottomNavbar />
  </v-app>
</template>

<script>
import BottomNavbar from "@/components/BottomNavbar.vue";
import TopNavbar from "@/components/TopNavbar.vue";

export default {
  name: "App",
  components: { TopNavbar, BottomNavbar },
  data: () => ({
    //
  }),
};
</script>
