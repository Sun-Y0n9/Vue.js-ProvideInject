<template>
    <div class="B" :style="{borderColor: homeProvideThisInlocalB.homeProvideColor}">
      <div class="wordB">
          B 
      </div>
      <div>
          <span>注入的provideCount值 : {{homeProvideCountInB}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name: 'B',
    data () {
        return {
            homeProvideThisInlocalB: this.homeThisInB,
            homeProvideCount: this.homeProvideCountInB
        }
    },
    inject: {
        homeThisInB: "homeThis",
        homeProvideCountInB: "provideCount"
    },
    methods:{
    
    },
    components:{

    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>
</script>

<style scoped type="text/css">
.wordB{
    font-size: 140px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 20%;
    position: absolute;
}
</style>
