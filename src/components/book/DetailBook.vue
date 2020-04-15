<template>
<div class="details">
  <!-- <v-card
    max-width="344"
    class="mx-auto"
  > -->
  <p v-for="(book,i) in books" :key="i.bookId">
          
      
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Book Title:{{book.name}}</v-list-item-title>
        <v-list-item-subtitle>Author book</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src=""
      height="194"
    ></v-img>

    <v-card-text>
      {{description}}
    </v-card-text>
  </p>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Bookmark
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  <!-- </v-card> -->
</div>

</template>
<script>
export default {
    
}
</script>
<style>
.details {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>