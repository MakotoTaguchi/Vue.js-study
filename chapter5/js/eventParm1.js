var app = new Vue({
    el: '#app',
    data: {
        color: 'white'
    },
    methods: {
        changeColor: function (c) {
            this.color = c;
        }
    },
    components: {
        'color-button': {
            props: ['bcolor'],
            template: `<button @click="$emit('change-color',bcolor)"><slot></slot></button>`
        }
    }
});