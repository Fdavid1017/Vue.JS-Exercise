<template>
    <div>
        <div>{{data}}</div>
        <br><br><br>
        <div>{{test}}</div>
        <canvas id='dataCanvas' v-bind:width="this.canvasWidth" v-bind:height="this.canvasHeight"></canvas>
    </div>
</template>

<script>
    export default {
        props: [
            'data'
        ],
        name: "GalaxyCanvas",

        data() {
            return {
                vueCanvas: null,
                test: 'start\n',
                canvasWidth: 500,
                canvasHeight: 500,
            }
        },

        mounted() {
            let c = document.getElementById("dataCanvas");
            let ctx = c.getContext("2d");
            this.vueCanvas = ctx;
            /*ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();*/
        },

        computed: {
            //Calculates the center of the canvas
            xOrigin: function () {
                return this.canvasWidth / 2;
            },
            yOrigin: function () {
                return this.canvasHeight / 2;
            }
        },

        watch: {
            data: function () {
                this.vueCanvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

                /*   let highestRA = this.data.hipstars[0].ra + this.data.hipstars[0].radius;
                   let highestDE = this.data.hipstars[0].de + this.data.hipstars[0].radius;
                   for (let i = 1; i < this.data.hipstars.length; i++) {
                       let raValue = Math.abs(this.data.hipstars[i].ra + this.data.hipstars[i].radius);
                       let deValue = Math.abs(this.data.hipstars[i].de + this.data.hipstars[i].radius);
                       if (raValue > highestRA) {
                           highestRA = raValue;
                       }
                       if (deValue > highestDE) {
                           highestDE = deValue;
                       }
                   }

                   this.canvasWidth = highestRA;
                   this.canvasHeight = highestDE;*/

                for (let i = 0; i < this.data.hipstars.length; i++) {
                    let current = this.data.hipstars[i];
                    this.vueCanvas.beginPath();
                    this.vueCanvas.arc(this.xOrigin + current.ra, this.yOrigin + current.de, current.radius, 0, 2 * Math.PI);
                    this.vueCanvas.stroke();
                }
            }
        }
    }
</script>

<style scoped>
    #dataCanvas {
        height: 500px;
        width: 500px;
        border: #2c3e50 1px solid;
    }
</style>