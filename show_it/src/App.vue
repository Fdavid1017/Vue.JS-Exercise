<template>
    <div id="app">
        <label for="list">Galaxy: </label><select id="list">
            <option v-for="galaxy in myJson" v-bind:key="galaxy.abbreviation">
                {{galaxy.name}}
            </option>
        </select>
    </div>
</template>

<script>
    import json from './data/constellations.json'

    export default {
        name: 'app',
        components: {},
        data() {
            return {
                myJson: json
            }
        }
    }
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
