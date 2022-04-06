var app = new Vue({
    el: '#app',
    data: {
        myStyle: {
            color: 'blue',
            align: 'center',
            size: '3em'
        }
    },
    methods: {
        setAlign: function (align) {
            this.align = align;
        }
    }
});