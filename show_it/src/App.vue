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
            <div id="menuBar" class="row d-inline-flex w-100 justify-content-start">
                <button class="menuItem p-2" v-on:click="showGalaxyInfos" :class='{activeMenuItem:isGalaxy}'>
                    Galaxy Infos
                </button>
                <button class="menuItem p-2 ml-1" id="right" v-on:click="showStarInfos"
                        :class='{activeMenuItem:isStar}'>
                    Star Infos
                </button>
            </div>
            <div id="rightContent" class="row h-100 w-100" :is="contentComponent"
                 v-bind:data='this.isGalaxy?this.currentGalaxy:this.result'>
                Select a galaxy
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console,no-unused-vars */

    import json from './data/constellations.json';
    import GalaxyCanvas from "./components/GalaxyCanvas";
    import axios from 'axios';
    import GalaxyInfos from "./components/GalaxyInfos";
    import StarInfosPanel from "./components/StarInfosPanel";
    import PlayAudioButton from "./components/PlayAudioButton";

    function GetCurrentGalaxy() {
        this.currentGalaxy = null;
        for (let i = 0; i < this.myJson.valueOf().length && this.currentGalaxy === null; i++) {
            if (this.myJson[i].abbreviation.toString() === this.selected) {
                this.currentGalaxy = this.myJson[i];
            }
        }
    }

    export default {
        name: 'app',
        components: {
            PlayAudioButton,
            GalaxyCanvas,
            GalaxyInfos,
            StarInfosPanel
        },
        data() {
            return {
                myJson: json,
                selected: 'none',
                result: 'üres',
                contentComponent: 'GalaxyInfos',
                isGalaxy: true,
                isStar: false,
                currentGalaxy: null
            }
        },
        methods: {
            GetJsonData: function () {
                if (this.selected === "none") {
                    return;
                }

                let url = 'https://www.astropical.space/api.php?table=stars&which=constellation&limit=' + this.selected + '&format=json';
                axios.get(url).then(response => (this.result = response.data));
                GetCurrentGalaxy.call(this);
            },

            showGalaxyInfos: function () {
                this.isGalaxy = true;
                this.isStar = false;
                GetCurrentGalaxy.call(this);
                this.contentComponent = 'GalaxyInfos';
            },
            showStarInfos: function () {
                this.isGalaxy = false;
                this.isStar = true;
                this.contentComponent = 'StarInfosPanel';
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

    #rightContent {
        color: #f5f5f5 !important;
        border: #171717 0 solid;
        background-color: rgba(16, 16, 16, 0.65);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }

    button {
        outline: none;
        background-color: rgba(255, 255, 255, 0.0);
    }

    button:focus {
        outline: none;
    }

    .menuItem {
        color: rgba(16, 16, 16, 0.0);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #f2f2f2;
        border: 0 solid #121212;
        border-radius: 10px 10px 0px 0px;
        background-color: rgba(16, 16, 16, 0.35);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }

    .activeMenuItem {
        background-color: rgba(16, 16, 16, 0.65);
        color: #ffbb4d !important;
        -webkit-text-stroke-width: 0px;
    }
</style>
