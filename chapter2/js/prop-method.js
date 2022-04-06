var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello'
    },
    computed: {
        dateProp: function () {
            // var test = this.msg
            return new Date().toLocaleString();
        }
    },
    methods: {
        dateMethod: function () {
            return new Date().toLocaleString();
        }
    }
});