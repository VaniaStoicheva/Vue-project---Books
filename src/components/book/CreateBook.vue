<template>
                    <form class="user-form"  @submit.prevent="submit">
                         <h2 class="user-links">
                           [+]  Add new book   
                    </h2>
                        <div class="form-group" >
                            <img src="https://img.icons8.com/material-sharp/42/000000/books.png">
                            <input type="text" name="bookName" placeholder="Book name">
                        </div>
                         <template v-if="$v.bookName.$error">
                            <p v-if="!$v.bookName.required" class="error">Book name is required!</p>
                        </template> 

                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/user.png">
                            <input type="text" name="author" placeholder="Book author">
                        </div>
                        <template v-if="$v.author.$error">
                            <p v-if="!$v.author.required" class="error">Author name is required!</p>
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
                        <input name="imgUrl" type="file" accept="image/*,.pdf" show-size label="File input" />
                        </div>
                        <template v-if="$v.imgUl.$error">
                            <p v-if="!$v.imgUl.required" class="error">Image book  is required!</p>
                        </template> 

                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/text.png">
                            <textarea 
                            name="description" placeholder="Book description">
                            </textarea>
                            </div>
                            <template v-if="$v.description.$error">
                            <p v-if="!$v.description.required" class="error">Description name is required!</p>
                            </template> 
                        

                        <div class="form-group">
                            <img src="https://img.icons8.com/material/42/000000/sale.png">
                            <input type="number" name="price" placeholder="Price">
                        </div>
                        <template v-if="$v.price.$error">
                            <p v-if="!$v.price.required" class="error">Price is required!</p>
                            </template> 
                        <button >Add Book</button>
                    </form>
</template>



<script>
   
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'

  export default {
      
    mixins: [validationMixin],

    validations: {
      bookName: { required, maxLength: maxLength(10) },
      author: { required,maxLength: maxLength(15) },
       genre: { required },
      select: { required },
      description:{required,maxLength: maxLength(200)},
      imgUl:{required},
      price:{required}
      
    },

    data: () => ({
      bookName: '',
      author: '',
      select: null,
      items: [
        'Sci-fi',
        'Fantasy',
        'Drama',
        'Other',
      ],
      description:'',
      imgUl:'',
      price:''
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
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
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
<style scoped>
p.error {
  text-align: center;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
 display: flex;
 
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
  width: 100%;
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