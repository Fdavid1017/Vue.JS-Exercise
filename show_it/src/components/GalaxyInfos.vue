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
        <div class="row w-100 justify-content-center">
            <a class="w-100 mr-2 ml-2" v-bind:href="this.wikiUrl" target="_blank">
                {{this.data!==null?((this.data.name===null||this.data.name==='')?'':
                'Click here to see more information about the '+this.data.name+' on the Wikipedia!'):''}}
            </a>
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

        computed: {
            wikiUrl: function () {
                if (this.data === null || this.data.name === null || this.data.name === '') {
                    return '';
                }

                return 'https://en.wikipedia.org/wiki/' + this.data.name;
            }
        },
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #f5f5f5 !important;
        text-align: center !important;
    }
</style>