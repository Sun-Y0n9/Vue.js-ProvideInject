<template>
    <div class="c1" :style="{backgroundColor: homeProvideThis.homeProvideColor, borderColor: homeProvideThis.homeProvideColor}">
      c1 注入的provideCount值 : {{homeCountLocalC1}}
    </div>
</template>

<script>
export default {
    name: 'c1',
    data () {
        return {
            homeProvideThis: this.homeThisInC1,
            homeCountLocalC1: this.provideCountInC1
        }
    },
    inject: {
        homeThisInC1: "homeThis",
        provideCountInC1: "provideCount"
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
.c1{
    width: 150px;
    height: 150px;
    border: 1px solid pink;
    box-sizing: border-box;
}
</style>
