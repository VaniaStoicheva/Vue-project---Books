import Home from './components/Home.vue';
import Register from './components/user/Register.vue';
import Login from './components/user/Login.vue';
import CreateBook from './components/book/CreateBook.vue';
import DetailBook from './components/book/DetailBook.vue';
import NotFound from './components/core/NotFound.vue';




export default [
{
    path:'/',
     component:Home,
    },
{path:'/register', component:Register},
{path:'/login', component:Login},
{path:'/create', component:CreateBook},
{path:'/details', component:DetailBook},
{path:'*', component:NotFound},
]


 