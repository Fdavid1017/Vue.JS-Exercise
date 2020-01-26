<template>
    <div id="app">
        <label for="list">Galaxy: </label>
        <select id="list" v-model="selected" @change="GetJsonData()">
            <option v-for="galaxy in myJson" v-bind:key="galaxy.abbreviation" v-bind:value="galaxy.abbreviation">
                {{galaxy.name}}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>
        <br><br>
        <GalaxyCanvas v-bind:data=this.result />
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
                if(this.selected==="none")
                {
                    return;
                }

                let url = 'https://www.astropical.space/api.php?table=stars&which=constellation&limit=' + this.selected + '&format=json';
                axios.get(url).then(response => (this.result = response.data));
            }
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
