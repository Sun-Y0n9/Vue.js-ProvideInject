<template>
    <div class="home" :style="{borderRight: '25px solid' + BGC}">
      <AC class="homec"></AC>
      <BC class="homec"></BC>
      <CC class="homec"></CC>
      <div class="fixed">
      	<button :style="{backgroundColor: BGC}" class="btn" @click="cneBgc">home-cne-BGC {{BGC}}</button>
      </div>
    </div>
</template>

<script>
import AC from "../components/A/A.vue"
import BC from "../components/B.vue"
import CC from "../components/C/C.vue"
import { color } from "@/utils/index.js"
export default {
    name: 'home',
    data () {
        return {
         	BGC: "#20b1aa"
        }
    },
    provide(){
    	return {
    		homeThis: this
    	}
    },
    methods:{
    	cneBgc(){
    		this.BGC =color();
    	}
    },
    components:{
    	AC,
    	BC,
    	CC
    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
.home{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
}
.btn{
	padding: 0 30px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	color: #000;
	border: none;
	background: #cdcdcd;
	outline: none;
  border-radius: 5px;
}
.fixed{
	width: 100%;
	height: 50px;
	line-height: 50px;
	position: fixed;
	left: 0;
	bottom: 40px;
}
</style>
