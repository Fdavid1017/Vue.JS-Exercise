<template>
    <div class="row w-100 pl-3 pt-2">
        <div class="row w-100">
            <div class="col title">Name:
                <PlayAudioButton v-bind:text="this.data===null?'':this.data.name"/>
            </div>
            <div class="col info">
                {{this.data!==null?((this.data.name===null||this.data.name==='')?'':this.data.name):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Abbreviation:
                <PlayAudioButton v-bind:text="this.data===null?'':this.data.abbreviation"/>
            </div>
            <div class="col info">
                {{this.data!==null?((this.data.abbreviation===null||this.data.abbreviation==='')?'':this.data.abbreviation):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Genitive:
                <PlayAudioButton v-bind:text="this.data===null?'':this.data.genitive"/>
            </div>
            <div class="col info">
                {{this.data!==null?((this.data.genitive===null||this.data.genitive==='')?'':this.data.genitive):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Origin:
                <PlayAudioButton v-bind:text="this.data===null?'':this.data.origin"/>
            </div>
            <div class="col info">
                {{this.data!==null?((this.data.origin===null||this.data.origin==='')?'':this.data.origin):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Meaning:
                <PlayAudioButton v-bind:text="this.data===null?'':this.data.meaning"/>
            </div>
            <div class="col info">
                {{this.data!==null?((this.data.meaning===null||this.data.meaning==='')?'':this.data.meaning):''}}
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    import PlayAudioButton from "./PlayAudioButton";

    export default {
        components: {PlayAudioButton},
        props: [
            'data'
        ],
        name: "GalaxyInfos",
    }
</script>

<style scoped>

</style>