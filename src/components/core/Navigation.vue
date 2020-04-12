<template>
    <div>
        <div class="navigation">
            <ul>
                <li>
        <router-link to="/home">Home</router-link>
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/allBooks">AllBooks</router-link>
          <router-link to="/create">Create book</router-link>
          <router-link to="/detail">Detail book</router-link>
                </li>
            </ul>
                <!-- <ul>
                    <li v-for="(item, index) in navItems" :key="item.id">
                        <a 
                        :class ="{ active: index === selectedIndex}"
                        @click="navItemClickHandler(index)"
                        >{{item.name}}</a>
                        </li>
                   
                </ul>
                <ul>
                    <li>
                        <a href="#">SUBJECT [+]</a>
                    </li>
                </ul>  -->
            </div>
           <router-view></router-view> 
    </div>
</template>

<script>
export default {
    props:{
        navItems:{
            type:Array,
            required:true
        }
    },
    selectedIndex:{
        type:Number,
        required:true
    },
    methods:{
        navItemClickHandler(index){
            this.$emit('navigate',index)
        }
    }
    
}
</script>

<style scoped>
li a {
    cursor: pointer;
}
</style>