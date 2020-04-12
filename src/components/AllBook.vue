<template>
    <app-content>
        <template v-slot:nav>
             <ul>
                 <li v-for="(item,index) of subjects" :key="index">
                     <a>{{item.name}}</a>
                 </li>
            </ul>
        </template>
        <template v-slot:info>
           <div class="form-group">
                        <input placeholder="Technology subject..." type="text" id="subject" v-model="subject" />
                    </div>
                    <div>TODO ADD THE EDITOR</div>
                    <select name="technologies" id="technologies" v-model="technology">
                        <option value="default" selected>Select a technology...</option>
                        <option v-for="item in technologies" :key="item.id" :value="item.id">{{item.name}}</option>
                        <!-- <option value="c-sharp">C#</option>
                        <option value="java">JAVA</option>
                        <option value="javscript">JAVASCRIPT</option>
                        <option value="python">PYTHON</option> -->
                    </select>
                    <vue-editor v-model="content" />
                    <button class="btn">Create</button>
                    {{htmlContent}}
                    <h3>All Book</h3>
                    <div class="content-preview"></div>
            </template>
    </app-content>
</template>

<script>
import AppContent from './shared/Content.vue';
import { VueEditor } from "vue2-editor";

export default {
components:{
    AppContent,
    VueEditor
},
props:{
    subjects:{
        type:Number,
        required:true
    },
    tehnologies:{
        type:Array,
        required:true
    }
},
tehnologies:{
    type:Number,
    required:true
} ,
data(){
    return{
        selectedSubjectIndex:0,
        htmlContent:'',
        technology:null,
        subject:''
    }
}

}
</script>

<style scoped>

</style>