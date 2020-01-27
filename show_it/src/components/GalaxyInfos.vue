<template>
    <div class="row w-100 pl-3 pt-2">
        <!--
         {"name":"Andromeda","abbreviation":"And","otherAbbreviation":"Andromedae","genitive":"ancient","origin":"Andromeda (The chained maiden or princess)","meaning":"Alpheratz"}
         -->
        <div class="row w-100">
            <div class="col title">Name:</div>
            <div class="col info">
                {{this.galaxy!==null?((this.galaxy.name===null||this.galaxy.name==='')?'':this.galaxy.name):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Abbreviation:</div>
            <div class="col info">
                {{this.galaxy!==null?((this.galaxy.abbreviation===null||this.galaxy.abbreviation==='')?'':this.galaxy.abbreviation):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Genitive:</div>
            <div class="col info">
                {{this.galaxy!==null?((this.galaxy.genitive===null||this.galaxy.genitive==='')?'':this.galaxy.genitive):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Origin:</div>
            <div class="col info">
                {{this.galaxy!==null?((this.galaxy.origin===null||this.galaxy.origin==='')?'':this.galaxy.origin):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Meaning:</div>
            <div class="col info">
                {{this.galaxy!==null?((this.galaxy.meaning===null||this.galaxy.meaning==='')?'':this.galaxy.meaning):''}}
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        props: [
            'galaxy'
        ],
        name: "GalaxyInfos",

        mounted() {
            console.log(this.galaxy);
        }
    }
</script>

<style scoped>
    .title {
        color: rgba(16, 16, 16, 0.0);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ffbb4d;
    }
</style>