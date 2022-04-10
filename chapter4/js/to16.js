var app = new Vue({
    el: '#app',
    data: {
        dec: 0
    },
    computed: {
        hex: function () {
            return this.dec.toString(16);
        }
    }
});