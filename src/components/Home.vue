<template>
  <div >
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(book, i) in books">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            
                <v-card-title class="title white--text">
                  <div>
                        <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                          <label>Title:</label>
                        {{ book.bookName }}
                        </p>
                        <p class="caption font-weight-medium font-italic text-left">
                        <label>Author:</label>
                          {{ book.author }}
                        </p>
                        </div>
                 </v-card-title>
                
                <v-img :src=book.imgUrl height="225px">
                    <v-row class="fill-height flex-column" justify="space-between">
                      <p class="mt-4 subheading text-left">{{ }}</p>
                    </v-row>
                </v-img>
                     
                 

                 <div class="align-self-center">
                        <v-btn
                        v-if="!isAuth"
                         :class="{ 'show-btns': hover }"
                          color="transparent"
                          @click="getBookById"
                          >
                         
                          Read more...
                        </v-btn>
                  </div>
               <div v-if=isAuth>
                  <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                          <label>Desription:</label>
                        {{ book.description }}
                        </p>
                         <v-spacer></v-spacer>
                        <p class="caption font-weight-medium font-italic text-left">
                        <label>Price:</label>
                          {{ book.price }}
                        </p>
               </div>

              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div> 
 
 
 
</template>

<script>
import booksMixin from "../mixins/books-mixin";


export default {
  props: {
    isAuth: Boolean
  },
   data: function() {
        return { 
            books: [],
            transparent: "rgba(255, 255, 255, 0)",
         }
    },
 
  transparent: "rgba(255, 255, 255, 0)",
  
  name: 'Home',
  beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
  created() {
  this.getAllBooks()
  },  
  methods:{
    getBookById(){
      const id= this.$route.params.id 
     console.log(id)
    }
  },
  mixins: [booksMixin]
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color:grey
}
.hide-btns {
  color:white
}
</style>