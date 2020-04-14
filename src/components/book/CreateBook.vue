<template>
                    <form class="user-form"  @submit.prevent="submit">
                         <h2 class="user-links">
                           [+]  Add new book   
                    </h2>
                        <div class="form-group" >
                            <img src="https://img.icons8.com/material-sharp/42/000000/books.png">
                            <input type="text" name="bookName" id="bookName" placeholder="Book name"
                             v-model="bookName"
                            @blur="$v.bookName.$touch"
                            >
                        </div>
                         <template v-if="$v.bookName.$error">
                            <p v-if="!$v.bookName.required" class="error">Book name is required!</p>
                            <p v-else-if="!$v.bookName.minLength || !$v.bookName.maxLenght"
                                 class="error"
                            >Book name should be between 3 and 16 symbols!</p>
                        </template> 

                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/user.png">
                            <input type="text" name="author" placeholder="Book author" id="author"
                             v-model="author"
                            @blur="$v.author.$touch">
                        </div>
                        <template v-if="$v.author.$error">
                            <p v-if="!$v.author.required" class="error">Author name is required!</p>
                            <p v-else-if="!$v.author.minLength || !$v.author.maxLenght"
                                    class="error"
                                >Author name should be between 3 and 16 symbols!</p>
                        </template>

                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/arrow.png">
                                <select 
                                name="genre" 
                                id="genre" 
                                class="genre"
                                @change="$v.genre.$touch"
                                v-model="genre">
                                <option :value="null">Select....</option>
                                <option value="1">Si-fi</option>
                                <option value="2">Fantasy</option>
                                <option value="3">Crime</option>
                                <option value="4">Drama</option>
                                <option value="5">Other</option>
                                </select>
                        </div>
                            <template v-if="$v.genre.$error">
                            <p v-if="!$v.genre.required" class="error">Genre for a book is required!</p>
                            </template>  

                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/picture.png">
                        <input name="imgUrl"  accept="image/*,.pdf" placeholder="Image Url" id="imgUrl"
                            v-model="imgUrl"
                            @blur="$v.imgUrl.$touch"
                         > </div>
                        
                         <template v-if="$v.imgUrl.$error">
                            <p v-if="!$v.imgUrl.required" class="error">Image book  is required!</p>
                            <p v-if="!$v.imgUrl.url" class="error">Image book  must be only URLs!</p>
                        </template>  
 
                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/text.png">
                            <textarea 
                            name="description" placeholder="Book description" id="description"
                             v-model="description"
                            @blur="$v.description.$touch">
                            </textarea>
                            </div>
                            <template v-if="$v.description.$error">
                            <p v-if="!$v.description.required" class="error">Description book is required!</p>
                            </template> 
                         

                         <div class="form-group">
                            <img src="https://img.icons8.com/material/42/000000/sale.png">
                            <input type="number" name="price" placeholder="Price" id="price"
                             v-model="price"
                            @blur="$v.price.$touch">
                        </div>
                        <template v-if="$v.price.$error">
                            <p v-if="!$v.price.required" class="error">Price book is required!</p>
                            </template>  
                        <button class="btn" @click="addBook">Add Book</button>
                    </form>
</template>



<script>
   
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, url } from 'vuelidate/lib/validators'
  import requester from '../../plugins/requester';

  export default {
      
    mixins: [validationMixin, requester],

    validations: {
      bookName: { required, maxLength: maxLength(16), minLength:minLength(3) },
      author: { required,maxLength: maxLength(16), minLength:minLength(3) },
      genre: { required },
      select: { required },
      description:{required,maxLength: maxLength(200)},
      imgUrl:{required, url},
      price:{required}
      
    },

    data() {
    return {
      bookName: "",
      author: "",
      genre:"",
      description:"",
      imgUrl:"",
      price:""
    }
    },

    /* computed: {
     
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      
    }, */

    methods: {
      submit () {
        this.$v.$touch()
        if(this.$v.$error){return; }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null 
      },
      addBook(){
          this.addBook()
          this.$router.push('home')
      }
    },
  }
</script>
<style scoped>
p.error {
  text-align: center;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
 display: inline-block;
    vertical-align: middle;
    width: 30%;
    margin: 0 2%;
 
}

input.error {
  border-left-color: #a8413f;
}
fieldset {
  border-radius: 10px;
  padding: 20px;
}

input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

select {
  border-color: black;
}
textarea {
  border-color: black;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 10%;
}

i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}

a {
  color: #007bff;
}

.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}



.genre {
  flex: 1 1 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

form .field {
  display: flex;
}
</style>