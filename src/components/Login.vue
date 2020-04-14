<template>
    <app-content>
       
        <template v-slot:info>
            <h2 class="user-links">
                    Login 
                    </h2>

                    <form class="user-form"  @submit.prevent="onLogin">
                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/user.png">
                            <input type="text"
                                name="email"
                                id="email"
                                v-model="email"
                                @blur="$v.email.$touch"
                                class="error"
                                placeholder="test@gmail.com">
                        </div>
                        <template v-if="$v.email.$error">
                            <p v-if="!$v.email.required" class="error">Email is required!</p>
                            <p v-else-if="!$v.email.email" class="error">Email is invalid!</p>
                        </template> 

                        <div class="form-group">
                            <img src="https://img.icons8.com/material/42/000000/password--v1.png">
                            <input  type="password" 
                            name="password" 
                            id="password" 
                            placeholder="******"
                            v-model="password"
                            @blur="$v.password.$touch">
                        </div>
                          <template v-if="$v.password.$error">
                            <p v-if="!$v.password.required" class="error">Password is required!</p>
                            <p
                                v-else-if="!$v.password.minLength || !$v.password.maxLenght"
                                class="error"
                            >Password should be between 3 and 16 symbols!</p>
                            <p v-else-if="!$v.password.alphanumeric" class="error">Password should match [0-9A-Za-z]!</p>
                        </template>

                        <button class="btn">Login</button>
                    </form>
            </template>
    </app-content>
</template>

<script>
import authAxios from "@/axios-auth";
import AppContent from './shared/Content.vue';
import { validationMixin } from 'vuelidate';
import {
    email,
  required,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";

const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]*$/);


export default {
  components: {
    AppContent
  },
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email
    }, 
    password: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16),
      alphanumeric
    }
  },
    methods: {
    onLogin() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };
      // Project Settings -> Web API key
      authAxios
        .post(
          '/accounts:signInWithPassword',
          payload
        )
        .then(res => {
          const { idToken, localId } = res.data;
          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
</script>

<style scoped>

</style>