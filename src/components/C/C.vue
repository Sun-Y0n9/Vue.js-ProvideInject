<template>
    <div class="C">
        <span class="wordC">C</span>
        <div class="childrenDiv">
            <c1></c1>
        </div>
        <button class="C-btn" @click="cneBGCinComC">C-cne-home-BGC</button>
    </div>
</template>

<script>
import c1 from "./c1.vue"
import { color } from "@/utils/index.js"
export default {
    name: 'C',
    data () {
        return {
             homeProvide: this.homeThisInC
        }
    },
    inject: {
        homeThisInC: "homeThis"
    },
    methods:{
        cneBGCinComC(){
            this.homeProvide.BGC = color();
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
.C{
    width: 400px;
    height: 400px;
    border: 1px solid #20b1aa;
    position: relative;
}
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
