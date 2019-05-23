<template>
    <div class="a1" :style="{backgroundColor: homeProvideThisInLocalA1.homeProvideColor, borderColor: homeProvideThisInLocalA1.homeProvideColor}">
      a1
    </div>
</template>

<script>
export default {
    name: 'a1',
    data () {
        return {
         	homeProvideThisInLocalA1: this.homeThisInA1
        }
    },
    inject: {
        homeThisInA1: "homeThis"
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

<style scoped type="text/css">
.a1{
    width: 150px;
    height: 150px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
</style>
