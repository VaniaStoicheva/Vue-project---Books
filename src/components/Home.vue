<template>
    <app-content>
        <template v-slot:nav>
             <ul>
                 <li v-for="(item,index) of subjects" :key="index">
                     <a>{{item.name}}</a>
                 </li>
                        <!-- <li>
                            <a href="#">JS Conditional Statements</a>
                        </li>
                        <li>
                            <a href="#">JS Loops</a>
                        </li>
                        <li>
                            <a href="#">JS Arrays</a>
                        </li>
                        <li>
                            <a href="#">JS Objects</a>
                        </li> -->
                    </ul>
        </template>
    </app-content>
</template>

<script>
import AppContent from './shared/Content.vue';

export default {
components:{
    AppContent
} ,
props:{
    subjects:{
        type:Array,
        required:true
    }
}   
}
</script>

<style scoped>

</style>