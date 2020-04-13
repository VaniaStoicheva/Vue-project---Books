import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import CreateBook from './components/book/CreateBook.vue';
import AllBook from './components/book/AllBook.vue';
import DetailBook from './components/book/DetailBook.vue';


export default [
{path:'/home', component:Home},
{path:'/register', component:Register},
{path:'/login', component:Login},
{path:'/allBooks', component:AllBook},
{path:'/create', component:CreateBook},
{path:'/details', component:DetailBook},
]
