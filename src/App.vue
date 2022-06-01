<template>
  <v-app class="app">
    <v-main>
      <Users/>
    </v-main>
  </v-app>
</template>

<script>
import Users from "@/components/Users";

export default {
  name: 'App',

  components: {
    Users,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  .app {
    background: whitesmoke !important;
  }
</style>
