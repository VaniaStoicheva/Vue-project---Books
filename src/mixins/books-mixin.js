import axiosDb from '@/axios-database';
import firebase from 'firebase'

export default {
    data: function() {
        return { 
            books: []
         }
    },
    methods: {
        async getAllBooks() {
            try {
                const res = await axiosDb.get(`books.json`);
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

        writeNewBook( bookName,author,genre,description,imgUrl,price )   {
            // A post entry.
            var bookData = {
                bookName:bookName,
                author:author,
                genre:genre,
                description:description,
                imgUrl:imgUrl,
                price:price   
            };
          
            // Get a key for a new Post.
            var newBookKey = firebase.database().ref().child('books').push().key;
          
            // Write the new post's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/books/' + newBookKey] = bookData;
            updates['/books-user/' + localStorage.getItem('token') + '/' + newBookKey] = bookData;
          
            return firebase.database().ref().update(updates);
          }
    }
}