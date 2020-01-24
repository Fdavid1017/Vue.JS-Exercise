var app = new Vue({
    el: '#app',
    data: {
        house: ''
    },
    methods: {
        getHouse: function() {
            axios.get('https://www.potterapi.com/v1/sortingHat').then(response => (this.house = response.data));
        }
    }
});