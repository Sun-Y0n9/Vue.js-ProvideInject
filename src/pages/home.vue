<template>
  <div class="homePage">
    <div class="homeFlex">
      <AC></AC>
      <BC></BC>
      <CC></CC>
    </div>
    <div class="homeVariable">
        <span>home中定义的Color : {{homeProvideColor}}</span>
        <span>home中定义的Number : {{count}}</span>
    </div>
    <div class="fixed">
      <button :style="{backgroundColor: homeProvideColor}" class="changeColorBtn" @click="cnehomeProvideColor">homeProvideColor : {{homeProvideColor}}</button>
      <button @click="cnehomeProvideCount">
        homeProvideCount : {{count}}
      </button>
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
         	homeProvideColor: "#20b1aa",
          count: 10
        }
    },
    provide(){
    	return {
    		homeThis: this,
        provideCount: this.count
    	}
    },
    methods:{
    	cnehomeProvideColor(){
    		this.homeProvideColor =color();
    	},
      cnehomeProvideCount(){
        this.count = Math.ceil(Math.random() * 99)
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
.homeFlex{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
  padding: 0 2px;
}
.homeFlex > div{
    width: 400px;
    height: 400px;
    border: 1px solid #20b1aa;
    position: relative;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    padding-top: 185px;
}
.homeVariable{
  padding: 0 20px;
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
}
.homeVariable span{
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  box-shadow: inset 0 0 15px #dcdcdc;
  font-weight: bold;
}
.fixed{
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: fixed;
  left: 0;
  bottom: 40px;
}
.fixed button{
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

span{
  padding-right: 0 5px;
}
</style>
