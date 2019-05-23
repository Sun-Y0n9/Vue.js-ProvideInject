<template>
    <div>
      <div class="A">
      	<span class="wordA" :style="{color: homeprovide.BGC}">A</span>
        <div class="childrenDiv">
          <a1></a1>
          <a2></a2>
        </div>
      </div>
    </div>
</template>

<script>
import a1 from "./a1.vue";
import a2 from "./a2/a2.vue"
export default {
    name: 'A',
    data () {
        return {
         	homeprovide: this.homeThisInA
        }
    },
    inject: {
    	homeThisInA: "homeThis"
    },
    methods:{
    
    },
    components:{
    	a1,
    	a2
    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
.A{
	width: 400px;
	height: 400px;
	border: 1px solid #20b1aa;
	position: relative;
}
.wordA{
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
</style>
