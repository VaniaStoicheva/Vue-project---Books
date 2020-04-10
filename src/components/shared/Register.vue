 <template>
  <app-content>
    <template v-slot:nav>
      <ul>
        <li v-for="(item,index) of subjects" :key="index">
          <a>{{item.name}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:info>
      <form action method="post">
        <fieldset>
          <h1>Registration Form</h1>

          <p class="field field-icon">
            <label for="username">
              <span>
                <i class="fas fa-user"></i>
              </span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="username"
              @blur="$v.username.$touch"
              class="error"
              placeholder="Mark Ulrich"
            />
          </p>

          <template v-if="$v.username.$errors">
            <p v-if="!$v.username.required" class="error">Username is required!</p>
            <p v-else-if="!$v.username.username" class="error">Username is invalid!</p>
          </template>

          <p class="field field-icon">
            <label for="email">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
            </label>
            <input type="text" name="email" id="email" placeholder="marg@gmial.com" />
          </p>

          <p class="field field-icon">
            <label for="tel">
              <span>
                <i class="fas fa-phone"></i>
              </span>
            </label>
            <select name="tel" id="tel" class="tel">
              <option value="1">+359</option>
            </select>
            <input type="text" name="tel" id="tel" placeholder="888 888" />
          </p>

          <p class="field field-icon">
            <label for="building">
              <span>
                <i class="fas fa-building"></i>
              </span>
            </label>
            <select name="building" id="building" class="building">
              <option value="1">Designer</option>
              <option value="2">Software Engineer</option>
              <option value="3">Accountant</option>
              <option value="4">Manager</option>
              <option value="5">Other</option>
            </select>
          </p>

          <p class="field field-icon">
            <label for="password">
              <span>
                <i class="fas fa-lock"></i>
              </span>
            </label>
            <input type="password" name="password" id="password" placeholder="******" />
          </p>

          <p class="field field-icon">
            <label for="re-password">
              <span>
                <i class="fas fa-lock"></i>
              </span>
            </label>
            <input type="re-password" name="re-password" id="re-password" placeholder="******" />
          </p>

          <p>
            <button>Create Account</button>
          </p>

          <p class="text-center">
            Have an account?
            <a href>Log In</a>
          </p>
        </fieldset>
      </form>
    </template>
  </app-content>
</template>
 
<script>
import AppContent from "./shared/Content.vue";
import { vuelidateMixin } from "vuelidate";
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
  mixins: [vuelidateMixin],
  data() {
    return {
      username: "",
      password: "",
      rePassword: "",
      email: "",
      tel: "",
      building: ""
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
    building: {
      required
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
  }
};
</script>

<style scoped>
form {
  margin-top: 20px;
  width: 40%;
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