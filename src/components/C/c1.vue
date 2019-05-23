<template>
    <div class="c1" :style="{backgroundColor: homeProvideThis.BGC, borderColor: homeProvideThis.BGC}">
      c1
    </div>
</template>

<script>
export default {
    name: 'c1',
    data () {
        return {
            homeProvideThis: this.homeThisInC1
        }
    },
    inject: {
        homeThisInC1: "homeThis"
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
