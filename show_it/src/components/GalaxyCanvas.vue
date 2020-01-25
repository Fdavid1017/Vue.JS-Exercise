<template>
    <canvas id='dataCanvas'></canvas>
</template>

<script>
    export default {
        props:[
            'data'
        ],
        name: "GalaxyCanvas",

        data(){
            return{
                vueCanvas:null,
            }
        },

        mounted(){
            let c = document.getElementById("dataCanvas");
            let ctx = c.getContext("2d");
            this.vueCanvas = ctx;

            ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
</script>

<style scoped>
#dataCanvas{
    height: 678px;
    width: 611px;
    border: #2c3e50 1px solid;
}
</style>