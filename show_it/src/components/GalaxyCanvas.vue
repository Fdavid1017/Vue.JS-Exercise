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
                canvasWidth: 181,
                canvasHeight: 181,
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
                this.vueCanvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

                /*let highestRA = this.data.hipstars[0].ra + this.data.hipstars[0].radius;
                let highestDE = this.data.hipstars[0].de + this.data.hipstars[0].radius;
                for (let i = 1; i < this.data.hipstars.length; i++) {
                    let raValue =Math.abs(this.xOrigin + this.data.hipstars[i].ra + this.data.hipstars[i].radius);
                    let deValue = Math.abs(this.yOrigin + this.data.hipstars[i].de + this.data.hipstars[i].radius);
                    if (raValue > highestRA) {
                        highestRA = raValue;
                    }
                    if (deValue > highestDE) {
                        highestDE = deValue;
                    }
                }

                this.canvasWidth = highestDE;
                this.canvasHeight = highestRA;

                console.log('Width: ' + this.canvasWidth + ' Height: ' + this.canvasHeight);*/

                for (let i = 0; i < this.data.hipstars.length; i++) {
                    let current = this.data.hipstars[i];
                    this.vueCanvas.beginPath();
                    this.vueCanvas.arc(current.ra,current.de, current.mag, 0, 2 * Math.PI);
                    this.vueCanvas.stroke();

                    if (this.xOrigin + current.ra > this.canvasWidth || this.yOrigin + current.mag > this.canvasHeight) {
                        console.error('X: ' + (this.xOrigin + current.ra) + '   Y: ' + (this.yOrigin + current.de) + '   Radius: ' + current.mag)
                    } else {
                        console.log('X: ' + (this.xOrigin + current.ra) + '   Y: ' + (this.yOrigin + current.de) + '   Radius: ' + current.mag)
                    }
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