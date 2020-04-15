import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
import vuetify from '@/plugins/vuetify'
import axios from 'axios';
import databaseMixin from './mixins/database-mixin';
//import { LOCAL_RESOURCE } from './constants'

const baseURL= 'https://books-vue-project.firebaseio.com/'

Vue.use(VueRouter)
Vue.mixin(databaseMixin)

Vue.config.productionTip = false



axios.interceptors.request.use(function (config) {
  if (!config.url.includes('http://')) { config.url = `${baseURL}/${config.url}`; }
  if (config.url.includes(baseURL)) { config.withCredentials = true; }
  return config;
}, function (err) {
  console.error(err);
  return Promise.reject(err);
});

const router=new VueRouter({
mode:'history',
  routes
})

/* const appTo={
  meta:{
    resources:{
      books: LOCAL_RESOURCE
    }
  }
} */

new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app')
