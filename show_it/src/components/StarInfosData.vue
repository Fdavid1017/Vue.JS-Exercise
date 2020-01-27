<template>
    <div class="row w-100 m-3">
        <div class="row w-100">
            <div class="col title">Magnitude:</div>
            <div class="col info">{{this.star.mag}}</div>
        </div>
        <div class="row w-100">
            <div class="col title">Distance:</div>
            <div class="col info">{{this.star.dist}}</div>
        </div>
        <div class="row w-100">
            <div class="col title">Radius:</div>
            <div class="col info">{{this.star.rad}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'star'
        ],
        name: 'StarInfosData'
    }
</script>
