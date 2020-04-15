<template>

 <div v-if="isAuth">
        Hello to the Page (authenticated)
        <p v-for="book in books" :key="book">
          {{bookName}}
        </p>

      


  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(book, i) in books" >
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="book.imgUrl"
                height="225px"
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">{{ book.bookName }}</p>

                    <div>
                      <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                        {{ book.bookName }}
                      </p>
                      <p class="caption font-weight-medium font-italic text-left">
                        {{ book.author }}
                      </p>
                      <p class="caption font-weight-medium font-italic text-left">
                        {{ book.genre }}
                      </p>
                      <p class="caption font-weight-medium font-italic text-left">
                        {{ book.description }}
                      </p>
                      <p class="caption font-weight-medium font-italic text-left">
                        {{ book.price }}
                      </p>
                    </div>

                    <div class="align-self-center">
                      <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        :class="{ 'show-btns': hover }"
                        color="transparent"
                        icon
                      >
                        <v-icon
                          :class="{ 'show-btns': hover }"
                          color="transparent"
                        >
                          {{ icon }}
                          {{bookName}}
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</div>

  <div v-else>
        Hello to the Page (not authenticated)
    </div>
  
</template>

<script>
import booksMixin from '../mixins/books-mixin';
import axiosDb from '@/axios-database';

  export default {
       props: {
            isAuth: Boolean
        },
    data: () => ({
       
        books:[{
    bookName:"",
      author: "",
      genre:"",
      description:"",
      imgUrl:"",
      price:""  
         } ],
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      /* items: [
        {
          title: 'New Releases',
          text: "It's New Release Friday",
          subtext: 'Newly released songs. Updated daily.',
          img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
        },
        {
          title: 'Rock',
          text: 'Greatest Rock Hits',
          subtext: 'Lose yourself in rock tunes.',
          img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg',
        },
      ], */
      transparent: 'rgba(255, 255, 255, 0)',
    }),
    name: 'Home',
  beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
  created() {
    this.getAllBooks()
 
  },
   methods: {
        async getAllBooks() {
            try {
                const res = await axiosDb.get(`bookName.json`);
                const allBooksRes = res.data;
                console.log(allBooksRes)
                for (const bookId in allBooksRes) {
                  this.books.push({
                    bookId,
                    ...allBooksRes[bookId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        }
        },
  mixins: [booksMixin]
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>