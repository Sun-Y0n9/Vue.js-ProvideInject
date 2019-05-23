<template>
    <div class="a22" @click="cneHomeBGC" :style="{backgroundColor: homeProvideInLocalA22.BGC, borderColor: homeProvideInLocalA22.BGC}">
      a22
    </div>
</template>

<script>
import { color } from "@/utils/index.js"
export default {
    name: 'a2-2',
    data () {
        return {
         	homeProvideInLocalA22: this.homeThisInA22
        }
    },
    inject: {
        homeThisInA22: "homeThis"
    },
    methods:{
        cneHomeBGC(){
            this.homeProvideInLocalA22.BGC = color();
        }
    },
    components:{

    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
.a22{
	height: 40px;
    width: 40px;
	border: 1px solid #dcdcdc;
    user-select: none;
    cursor: pointer;
}
</style>
