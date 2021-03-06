<template>
    <div>
        <canvas id='dataCanvas' ref="dataCanvas" v-bind:width="this.canvasWidth"
                v-bind:height="this.canvasHeight"></canvas>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    import {EventBus} from "./EventBus";
    import ConvertCoordinates from "../functions/ConvertCoordinates";

    function DrawCircle(location, color) {
        let c = document.getElementById("dataCanvas");
        let canvas = c.getContext("2d");
        canvas.beginPath();
        canvas.arc((c.width / 2) + location.X, (c.height / 2) + location.Y, location.mag, 0, 2 * Math.PI);
        canvas.strokeStyle = color;
        canvas.lineWidth = 2;
        canvas.stroke();
    }

    EventBus.$on('StarHighlighted', location => {
        DrawCircle(location, '#DC141C');
    });

    EventBus.$on('StarHighlightedEnd', location => {
        DrawCircle(location, '#FCCC04');
    });

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

                    this.vueCanvas.beginPath();
                    this.vueCanvas.moveTo(this.xOrigin, this.yOrigin);
                    this.vueCanvas.lineTo(x2, y2);
                    this.vueCanvas.closePath();
                    this.vueCanvas.strokeStyle = '#5e5e5e';
                    this.vueCanvas.lineWidth = 1;
                    this.vueCanvas.stroke();
                }

                for (let i = 0; i < this.data.hipstars.length; i++) {
                    let current = this.data.hipstars[i];

                    //converting celestial coordinates to cartesian coordinates
                    let coordinates = ConvertCoordinates.CelestialToCartesianConverter(current);

                    //Drawing stars
                    this.vueCanvas.beginPath();
                    this.vueCanvas.arc(this.xOrigin + coordinates.X, this.yOrigin + coordinates.Y, current.mag, 0, 2 * Math.PI);
                    this.vueCanvas.strokeStyle = '#FCCC04';
                    this.vueCanvas.lineWidth = 2;
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
        border: #f5f5f5 1px solid;
        background-color: rgba(255, 255, 255, 0.41);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }
</style>