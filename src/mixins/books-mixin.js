import axiosDb from '@/axios-database';


export default {
    data: function() {
        return { 
            books: [],
            id:this.$route.params.id ,
           book:{}
         }
    },
    methods: {
        async getAllBooks() {
            try {
                const res = await axiosDb.get(`books.json`);
                const allBooksRes = res.data;
                //console.log(allBooksRes)
                for (const bookId in allBooksRes) {
                  this.books.push({
                    bookId,
                    ...allBooksRes[bookId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        },

        async  deleteBook() {
            const payload = {
                  bookName: '',
                  author: '',
                  genre: '',
                  description: '',
                  imgUrl: '',
                  price: ''
                };
          
         await axiosDb
              .delete('/books.json', payload).then(res => {
                console.log(res)
                  console.log('Book deleted!')
                  this.$router.push("/");
              })
           },

            async getBookById(){
            axiosDb.get('/books/'+ this.id +'.json').then(function(data){
                return data.json();
            }).then(function(data){
                this.book=data
            })
           } 
           
      
    }
}