<template>
    <img src="../assets/play.svg" v-on:click="PlayAudio(text)" alt="Play Audio">
</template>

<script>
    import PlaySound from '../functions/PlaySound';

    export default {
        props: [
            'text'
        ],
        name: "PlayAudioButton",

        methods: {
            PlayAudio: function (text) {
                text = text === undefined ? '' : text;
                PlaySound.PlaySound(text);
            }
        }
    }
</script>

<style scoped>
    img {
        height: 25px;
        width: 25px;
        cursor: pointer;
    }
</style>