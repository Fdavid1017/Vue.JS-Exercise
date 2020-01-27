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
        <div id="rightSide" class="col h-100 justify-content-center w-50">

        </div>
    </div>
</template>

<script>
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
            }
        }
    };
</script>

<style>
    #glCanvas {
        margin-top: 30px;
    }
</style>
