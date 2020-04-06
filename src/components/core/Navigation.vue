<template>
    <div>
        <div class="navigation">
                <ul>
                    <li v-for="item in navItems" :key="item.id"><a>{{item.name}}</a></li>
                   
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
    }
    
}
</script>

<style scoped>
li a {
    cursor: pointer;
}
</style>