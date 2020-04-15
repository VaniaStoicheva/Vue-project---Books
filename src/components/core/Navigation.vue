<template>
  <v-toolbar color="blue lighten-3" padless>
    <v-toolbar-title>Online Bookstore</v-toolbar-title>

    <v-divider class="mx-4" inset vertical></v-divider>

    <v-btn text>
      <router-link to="/">Home</router-link>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn text v-if="!isAuth">
      <router-link to="/register">Register</router-link>
    </v-btn>

    <v-divider inset vertical></v-divider>

    <v-btn text v-if="!isAuth">
      <router-link to="/login">Login</router-link>
    </v-btn>

    <v-divider inset vertical></v-divider>

    <v-btn text v-if="isAuth">
      <router-link to="/create">Create book</router-link>
    </v-btn>

    <v-divider inset vertical></v-divider>

    <v-btn text v-if="isAuth">
      <router-link to="/details">Detail book</router-link>
    </v-btn>

    <v-divider inset vertical></v-divider>

    <v-btn text v-if="isAuth">
      <a @click="onLogout">Logout</a>
    </v-btn>

    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-toolbar>
</template>

<script>
export default {
  props: {
    isAuth: Boolean
  },
  methods: {
    onLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      this.$emit("onAuth", false);
    }
  }
};
</script>

<style scoped>
v-btn::-webkit-scrollbar-track {
  text-decoration: cornflowerblue;
}
</style>