/* const appKey = "kid_SyUcZf6WG" 
const appSecret = "4c43d811d4964f36ac65275c407ff703" 
/* const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout` */
//const addBookUrl = `https://baas.kinvey.com/user/${appKey}/addBooks`;

/* const requester={
    methods:{

        createAuthHeaders(type )  {
            if (type === 'Basic') {
              return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
              })
            } else {
              return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
              })
            }
          },

        addBook(book) {
            const body = JSON.stringify(book);
            return this.http.post(`https://baas.kinvey.com/appdata/${appKey}/books`, body, {
              headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
                .set('Content-Type', 'application/json')
            });
          }, */

          /* getAllBooks(){
            return this.http.get(`https://baas.kinvey.com/appdata/${appKey}/books`, {
              headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
                .set('Content-Type', 'application/json')
            });
          },

          getById(id )  {
            return this.http.get(`https://baas.kinvey.com/appdata/${appKey}/books/`+id, {
              headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
                .set('Content-Type', 'application/json')
            });
          } ,

          updateBook(id, data) {
            const body = JSON.stringify(data);
            return this.http.put(`https://baas.kinvey.com/appdata/${appKey}/books/`+id, body,{
              headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
                .set('Content-Type', 'application/json')
            });
          } */
        
  /*   }     
}
export default requester; */ 