import axiosDb from '@/axios-database';

export default {
    data: function() {
        return { 
            books: []
         }
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
        },

        /* async createBook(book) {
            try {
                console.log(book)
                //const body = JSON.stringify(book);
                const response = await axiosDb.post(book).map(res => res.json());
                return response;
                
            } catch(err) {
                console.log(err);
            } 
        } */
    }
}