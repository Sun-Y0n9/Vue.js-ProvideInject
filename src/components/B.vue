<template>
    <div class="B" :style="{backgroundColor: homeProvideThisInlocalB.BGC}">
      <div class="wordB">
          B
      </div>
    </div>
</template>

<script>
export default {
    name: 'B',
    data () {
        return {
            homeProvideThisInlocalB: this.homeThisInB
        }
    },
    inject: {
        homeThisInB: "homeThis"
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
.B{
    width: 400px;
    height: 400px;
    border: 1px solid #20b1aa;
    position: relative;
}
.wordB{
    font-size: 140px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 20%;
    position: absolute;
}
</style>
