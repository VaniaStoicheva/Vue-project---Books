<template>
    <app-content>
        <template v-slot:nav>
             <ul>
                 <li v-for="(item,index) of subjects" :key="index">
                     <a>{{item.name}}</a>
                 </li>
            </ul>
        </template>
        <template v-slot:info>{{selectedSubject.content}}</template>
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
},
data(){
    return {
        selectedSubjectIndex:0
    }
},
computed:{
    selectedSubject(){
        return this.subjects[this.selectedSubjectIndex]
    }
}   
}
</script>

<style scoped>

</style>