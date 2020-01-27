<template>
    <div class="row p-2">
        <div class="col h-100" id="starNames">
            <ol>
                <li v-for="star in this.data.hipstars" v-bind:key="star.id" v-on:mouseover="ItemHover(star.id-1)">
                    {{star.name===''?'Unnamed':star.name}}
                </li>
            </ol>
        </div>
        <div class="col h-100">
            <StarInfosData v-bind:star='this.currentStar'/>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    import StarInfosData from "./StarInfosData";

    export default {
        components: {StarInfosData},
        props: [
            'data'
        ],

        name: "StarInfosPanel",

        data() {
            return {
                currentStar: '',
                isActive: false
            }
        },

        methods: {
            ItemHover: function (id) {
                this.currentStar = this.data.hipstars[id];
                console.log(this.$refs.dataCanvas);
            }
        }
    }
</script>

<style scoped>
    #starNames {
        overflow-y: scroll;
        overflow-x: hidden;
    }

    #starNames::-webkit-scrollbar-track {
        border: 1px solid black;
        background-color: #F5F5F5;
    }

    #starNames::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;
    }

    #starNames::-webkit-scrollbar-thumb {
        background-color: #000000;
    }

    li:hover {
        color: rgba(16, 16, 16, 0.0);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ffbb4d;
    }
</style>