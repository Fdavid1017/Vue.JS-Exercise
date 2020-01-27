<template>
    <div class="row w-100 pl-3 pt-2">
        <div class="row w-100">
            <div class="col title">Name:</div>
            <div class="col info">
                {{this.data!==null?((this.data.name===null||this.data.name==='')?'':this.data.name):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Abbreviation:</div>
            <div class="col info">
                {{this.data!==null?((this.data.abbreviation===null||this.data.abbreviation==='')?'':this.data.abbreviation):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Genitive:</div>
            <div class="col info">
                {{this.data!==null?((this.data.genitive===null||this.data.genitive==='')?'':this.data.genitive):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Origin:</div>
            <div class="col info">
                {{this.data!==null?((this.data.origin===null||this.data.origin==='')?'':this.data.origin):''}}
            </div>
        </div>
        <div class="row w-100">
            <div class="col title">Meaning:</div>
            <div class="col info">
                {{this.data!==null?((this.data.meaning===null||this.data.meaning==='')?'':this.data.meaning):''}}
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        props: [
            'data'
        ],
        name: "GalaxyInfos",
    }
</script>

<style scoped>

</style>