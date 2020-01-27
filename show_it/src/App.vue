<template>
    <div id="app" class="row h-100 justify-content-center mt-5">
        <div id="leftSide" class="col h-100 justify-content-center w-50">
            <div id="select" class="row  justify-content-center">
                <label for="list" class="mr-4">Galaxy: </label>
                <select id="list" v-model="selected" @change="GetJsonData()">
                    <option v-for="galaxy in myJson" v-bind:key="galaxy.abbreviation"
                            v-bind:value="galaxy.abbreviation">
                        {{galaxy.name}}
                    </option>
                </select>
            </div>
            <GalaxyCanvas class="row  justify-content-center" id="glCanvas" v-bind:data='this.result'/>
        </div>
        <div id="rightSide" class="col h-75 w-50 mr-5 mb-5">
            <div id="menuBar" class="d-inline-flex row w-100 justify-content-start">
                <button class="mt-2 ml-3" v-on:click="showGalaxyInfos">Galaxy Infos</button>
                <button class="mt-2 ml-5" v-on:click="showStarInfos">Star Infos</button>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    import json from './data/constellations.json';
    import GalaxyCanvas from "@/components/GalaxyCanvas";
    import axios from 'axios';

    export default {
        name: 'app',
        components: {
            GalaxyCanvas
        },
        data() {
            return {
                myJson: json,
                selected: 'none',
                result: 'üres'
            }
        },
        methods: {
            GetJsonData: function () {
                if (this.selected === "none") {
                    return;
                }

                let url = 'https://www.astropical.space/api.php?table=stars&which=constellation&limit=' + this.selected + '&format=json';
                axios.get(url).then(response => (this.result = response.data));
            },

            showGalaxyInfos: function () {
                console.log('GALAXY');
            },
            showStarInfos: function () {
                console.log('Star');
            }
        }
    };
</script>

<style>
    #glCanvas {
        margin-top: 30px;
    }

    select {
        color: #121212;
        border: #f5f5f5 1px solid;
        background-color: rgba(255, 255, 255, 0.41);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }

    #rightSide {
        border: #171717 1px solid;
        background-color: rgba(16, 16, 16, 0.76);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }

    button{
        color: #121212;
        border: #f5f5f5 1px solid;
        background-color: rgba(255, 255, 255, 0.41);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }
</style>
