<template>
    <div class="C">
        <span class="wordC">C</span>
        <div class="childrenDiv">
            <c1></c1>
        </div>
        <button class="C-btn" @click="cnehomeProvideColorinComC">homeProvideColor</button>
    </div>
</template>

<script>
import c1 from "./c1.vue"
import { color } from "@/utils/index.js"
export default {
    name: 'C',
    data () {
        return {
             homeProvide: this.homeThisInC,
             num: 47
        }
    },
    provide(){
        return {
            provideCount: this.num
        }
    },
    inject: {
        homeThisInC: "homeThis",
    },
    methods:{
        cnehomeProvideColorinComC(){
            this.homeProvide.homeProvideColor = color();
        }
    },
    components:{
        c1
    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
.wordC{
    font-size: 140px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 20%;
    position: absolute;
}
.childrenDiv{
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.C-btn{
    height: 35px;
    border: none;
    outline: none;
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: pointer;
    border-radius: 5px;
}
</style>
