<template>
    <div class="row w-100 m-3">
        <div class="row w-100">
            <div class="col title">Magnitude:
                <PlayAudioButton v-bind:text="this.star.mag"/>
            </div>
            <div class="col info">{{this.star.mag}}</div>
        </div>
        <div class="row w-100">
            <div class="col title">Distance:
                <PlayAudioButton v-bind:text="this.star.dist"/>
            </div>
            <div class="col info">{{this.star.dist}}</div>
        </div>
        <div class="row w-100">
            <div class="col title">Radius:
                <PlayAudioButton v-bind:text="this.star.rad"/>
            </div>
            <div class="col info">{{this.star.rad}}</div>
        </div>
    </div>
</template>
<script>
    import PlayAudioButton from "./PlayAudioButton";

    export default {
        components: {PlayAudioButton},
        props: [
            'star'
        ],
        name: 'StarInfosData'
    }
</script>
