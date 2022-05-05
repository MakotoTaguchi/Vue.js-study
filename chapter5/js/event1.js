Vue.component('hello-button', {
    template: `<button @click="$emit('hello')">押して</button>`
});

var app = new Vue({
    el: '#app',
    data: {
        msg: ''
    }
});