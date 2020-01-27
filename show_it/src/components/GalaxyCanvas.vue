<template>
    <div>
        <canvas id='dataCanvas' v-bind:width="this.canvasWidth" v-bind:height="this.canvasHeight"></canvas>
    </div>
</template>

<script>
    /* eslint-disable no-console */
    export default {
        props: [
            'data'
        ],
        name: "GalaxyCanvas",

        data() {
            return {
                vueCanvas: null,
                canvasWidth: 500,
                canvasHeight: 500,
            }
        },

        mounted() {
            let c = document.getElementById("dataCanvas");
            this.vueCanvas = c.getContext("2d");
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
                //clear the canvas
                this.vueCanvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

                //draw lines (15=360/24)
                let lineLength = 500;
                for (let k = 0; k < 30; k++) {
                    let x2 = this.xOrigin + Math.cos(Math.PI * (k * 15) / 180) * lineLength;
                    let y2 = this.yOrigin + Math.sin(Math.PI * (k * 15) / 180) * lineLength;
                    console.log('X: ' + x2 + ' Y: ' + y2);
                    this.vueCanvas.beginPath();
                    this.vueCanvas.moveTo(this.xOrigin, this.yOrigin);
                    this.vueCanvas.lineTo(x2, y2);
                    this.vueCanvas.closePath();
                    this.vueCanvas.strokeStyle='#5e5e5e';
                    this.vueCanvas.lineWidth=1;
                    this.vueCanvas.stroke();
                }

                for (let i = 0; i < this.data.hipstars.length; i++) {
                    let current = this.data.hipstars[i];

                    //converting celestial coordinates to cartesian coordinates
                    let hours, minutes, seconds, temp;
                    hours = parseInt(current.ra);
                    temp = (current.ra - hours) * 60;
                    minutes = parseInt(temp);
                    temp -= minutes;
                    temp *= 60;
                    seconds = parseInt(temp);

                    let a = (hours * 15) + (minutes * 0.25) + (seconds * 0.004166);
                    let b = current.de; //current.de
                    let c = current.dist;//current.dist
                    let x, y;
                    /*
                    X = (C * cos(B)) * cos(A)
                    Y = (C * cos(B)) * sin(A)
                    Z = C * sin(B)
                    */
                    x = (c * Math.cos(b)) * Math.cos(a);
                    y = (c * Math.cos(b)) * Math.sin(a);

                    //Drawing stars
                    this.vueCanvas.beginPath();
                    this.vueCanvas.arc(this.xOrigin + x, this.yOrigin + y, current.mag, 0, 2 * Math.PI);
                    this.vueCanvas.strokeStyle='#FCCC04';
                    this.vueCanvas.lineWidth=2;
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
        border: #dedede 1px solid;
        background-color: rgba(255, 255, 255, 0.41);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }
</style>