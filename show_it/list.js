import json from './data/constellations.json';
var list = new Vue({
    el: '#list',
    data: {
        galaxys: [
            { name: 'a' },
            { name: 'b' },
            { name: 'c' }
        ]
    },
    methods: {
        getGalaxys: function() {
            galaxys = json;
        }
    }
});