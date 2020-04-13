<template>
  <v-toolbar
     color="blue lighten-3"
    padless
  >
    <v-toolbar-title>Online Books</v-toolbar-title>

    <v-divider
     class="mx-4" 
      inset
      vertical
    ></v-divider>

    <span class="subheading">
       <v-btn text> <router-link to="/home">Home</router-link></v-btn>
       </span>

    <v-spacer></v-spacer>

    
      <v-btn text>
        <router-link to="/register">Register</router-link>
      </v-btn>
   

      <v-divider
        inset
        vertical
      ></v-divider>

      <v-btn text>
        <router-link to="/login">Login</router-link>
      </v-btn>

      <v-divider
        inset
        vertical
      ></v-divider>

      <v-btn text>
        <router-link to="/allBooks">AllBooks</router-link>
      </v-btn>

      <v-divider
        inset
        vertical
      ></v-divider>

      <v-btn text>
        <router-link to="/create">Create book</router-link>
      </v-btn>

      <v-divider
        inset
        vertical
      ></v-divider>

      <v-btn text>
       <router-link to="/details">Detail book</router-link>
      </v-btn>

    
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
  
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>