import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Register from './components/user/Register.vue';
import Login from './components/user/Login.vue';
import CreateBook from './components/book/CreateBook.vue';
import DetailBook from './components/book/DetailBook.vue';
import NotFound from './components/core/NotFound.vue';

 
Vue.use(VueRouter);

function anonymousGuard(to, from, next) {
    if (localStorage.getItem('token') !== null) {
        next('/');
    } else {
        next();
    }
}


export default [
{path:'/',component:Home},
{path:'/home',component:Home},
{path:'/register', component:Register, beforeEnter: anonymousGuard},
{path:'/login', component:Login, beforeEnter: anonymousGuard},
{path:'/create', component:CreateBook, beforeEnter: anonymousGuard},
{path:'/details:id', component:DetailBook, props:true},
{path:'*', component:NotFound},
]

