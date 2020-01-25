<template>
    <div id="app">
        <label for="list">Galaxy: </label>
        <select id="list" v-model="selected" @change="GetJsonData()">
            <option v-for="galaxy in myJson" v-bind:key="galaxy.abbreviation" v-bind:value="galaxy.abbreviation">
                {{galaxy.name}}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>
        <div>Json:<br>{{JSON.stringify(this.result)}}</div>
    </div>
</template>

<script>
    import json from './data/constellations.json';
    import axios from 'axios';

    export default {
        name: 'app',
        components: {},
        data() {
            return {
                myJson: json,
                selected: 'And',
                result: 'üres'
            }
        },
        methods: {
            GetJsonData: function () {
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
