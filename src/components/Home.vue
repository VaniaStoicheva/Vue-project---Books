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
                          <label>Заглавие:</label>
                        {{ book.bookName }}
                        </p>
                        <p class="caption font-weight-medium font-italic text-left">
                        <label>Автор:</label>
                          {{ book.author }}
                        </p>
                        <p class="caption font-weight-medium font-italic text-left">
                        <label>Жанр:</label>
                          {{ book.genre }}
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
                          >
                      <router-link to="/login">Login or Register to vue  more...</router-link>
                        </v-btn>
                  </div>

                  
               <div v-if=isAuth>
                  <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                          <span>Резюме: </span>
                        {{ book.description }}
                        </p>
                         <v-spacer></v-spacer>
                        <p class="caption font-weight-medium font-italic text-left">
                        <label class="label">Цена:</label>
                          {{ book.price }}
                        </p>
               </div>

 
                 <div class="align-self-center">
                 
                        
                       <!-- 
                         <router-link v-bind:to="'/details/'+ book.id" >Details</router-link>
                        <v-btn
                       v-if="isAuth"
                         :class="{ 'show-btns': hover }"
                          color="transparent"
                          >
                          Delete book
                        </v-btn>-->
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
import axiosDb from '@/axios-database';
import booksMixin from "../mixins/books-mixin";
 
export default {
   mixins: [booksMixin],

  props: {
    isAuth: Boolean,
    
    
  },

   data: function() {
        return { 
            books: [],
            id:this.$route.params.id,
            book:{}
         }
    },

  name: 'Home',
  
  beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
  
  created() {
  this.getAllBooks()
  }, 

  methods:{
    async getBookById(){
            axiosDb.get('/books/'+ this.id +'.json').then(function(data){
                 console.log(data)
                return data.json();
               
            }).then(function(data){
                this.book=data
               console.log(data)
            })
           } 
    
  },
  computed: {
    getId() {
    
      const id=this.$route.params.id
      console.log(id)
      return id;
    }
  },
}
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