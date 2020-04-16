import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
import vuetify from '@/plugins/vuetify'
import axios from 'axios';


const baseURL= 'https://books-vue-project.firebaseio.com/'

Vue.use(VueRouter)


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



new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app')
