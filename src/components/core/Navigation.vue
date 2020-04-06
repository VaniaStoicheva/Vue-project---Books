<template>
    <div>
        <div class="navigation">
                <ul>
                    <li v-for="(item, index) in navItems" :key="item.id">
                        <a @click="navItemClickHandler(index)">{{item.name}}</a>
                        </li>
                   
                </ul>
                <ul>
                    <li>
                        <a href="#">SUBJECT [+]</a>
                    </li>
                </ul> 
            </div>
            
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