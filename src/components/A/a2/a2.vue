<template>
    <div class="a2" :style="{borderColor: homeProvideThisInlocalA2.homeProvideColor}">
      <span class="fixed" :style="{color: homeProvideThisInlocalA2.homeProvideColor}">a2</span>
      <div class="childrenDiv">
          <a21></a21>
          <a22></a22>
          <a23></a23>
      </div>
    </div>
</template>

<script>
import a21 from "./a2-1.vue"
import a22 from "./a2-2.vue"
import a23 from "./a2-3.vue"
export default {
    name: 'a2',
    data () {
        return {
         	homeProvideThisInlocalA2: this.homeThisInA2
        }
    },
    inject: {
        homeThisInA2: "homeThis"
    },
    methods:{
    
    },
    components:{
        a21,
        a22,
        a23
    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
.a2{
    width: 150px;
    height: 150px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    position: relative;
}
.fixed{
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
}
.childrenDiv{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>
