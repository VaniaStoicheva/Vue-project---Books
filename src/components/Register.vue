 <template>
  <app-content>
   
    <template v-slot:info>
      <h2 class="user-links">
        Register
        </h2>
      
      <form class="user-form"  @submit.prevent="submitHandler">
        <div class="form-group">
          <img src="https://img.icons8.com/material-sharp/42/000000/user.png">
            <input
              type="text"
              name="username"
              id="username"
              v-model="username"
              @blur="$v.username.$touch"
              class="error"
              placeholder="username"
            />
        
          <template v-if="$v.username.$error">
            <p v-if="!$v.username.required" class="error">Username is required!</p>
            <p v-else-if="!$v.username.username" class="error">Username is invalid!</p>
          </template> 
          </div>
           
         <div class="form-group">
          <img src="https://img.icons8.com/material-sharp/42/000000/email.png">
            <input 
            type="text" 
            name="email" 
            id="email" 
            v-model="email"
            @blur="$v.email.$touch"
            placeholder="test@gmial.com" />
         </div>
           <template v-if="$v.email.$error">
            <p v-if="!$v.email.required" class="error">Email is required!</p>
            <p v-else-if="!$v.email.email" class="error">Email is invalid!</p>
          </template>


          <div class="form-group">
          <img src="https://img.icons8.com/material-sharp/42/000000/phone.png">
            <input 
            type="text" 
            name="tel" 
            id="tel"
            v-model="tel"
            @blur="$v.tel.$touch" 
            placeholder="888 888" />
          </div>
          <template v-if="$v.tel.$error">
            <p v-if="!$v.tel.required" class="error">Phonenumber is required!</p>
            <p v-else-if="!$v.tel.phonenumber" class="error">Phonenumber is invalid!</p>
          </template>
         
          <div class="form-group">
          <img src="https://img.icons8.com/material-sharp/42/000000/password--v1.png">
            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="******"
            v-model="password"
            @blur="$v.password.$touch"  />
          </div>
          <template v-if="$v.password.$error">
          <p v-if="!$v.password.required" class="error">Password is required!</p>
          <p
            v-else-if="!$v.password.minLength || !$v.password.maxLenght"
            class="error"
          >Password should be between 3 and 16 symbols!</p>
          <p v-else-if="!$v.password.alphanumeric" class="error">Password should match [0-9A-Za-z]!</p>
        </template>

           <div class="form-group">
          <img src="https://img.icons8.com/material-sharp/42/000000/password--v1.png">
            <input 
            type="re-password" 
            name="re-password" 
            id="re-password" 
            placeholder="******"
             v-model="rePassword"
            @blur="$v.rePassword.$touch"
             />
           </div>
          <template v-if="$v.rePassword.$error">
          <p v-if="!$v.rePassword.sameAs" class="error">Repeat Password does not match password!</p>
        </template>

          
            <button class="btn">Create Account</button>
          

          <p class="text-center">
            Have an account?
            <a href>Log In</a>
          </p>
        
       
      </form>
    </template>
  </app-content>
  
</template>
 
<script>
import AppContent from "./shared/Content.vue";
import { validationMixin } from 'vuelidate';
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";

const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]*$/);
const phonenumber = helpers.regex("phonenumber", /^[0-9]{9}$/);

function username(value) {
  const valueArray = value.trim().split(" ");
  if (valueArray.length > 2) {
    return false;
  }
  return (
    !!valueArray[0] &&
    /[A-Z]/g.test(valueArray[0][0]) &&
    !!valueArray[1] &&
    /[A-Z]/g.test(valueArray[1][0])
  );
}

export default {
  components: {
    AppContent
  },
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: "",
      rePassword: "",
      email: "",
      tel: "",
     
    };
  },
  validations: {
    username: {
      required,
      username
    },
    email: {
      required,
      email
    },
    tel: {
      required,
      phonenumber
    },
   
    password: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16),
      alphanumeric
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  },
  methods:{
    submitHandler(){
      this.$v.$touch();
      if(this.$v.$error){return; }
    }
  }
};
</script>

<style scoped>
/* form {
  margin-top: 20px;
  width: 40%;
} */

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

.tel {
  padding-right: 20px;
}

.building {
  flex: 1 1 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

form .field {
  display: flex;
}

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}
</style>