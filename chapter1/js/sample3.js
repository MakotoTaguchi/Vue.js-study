var app = new Vue({
    el: '#app',
    data: {
        msg1: 'はじめてのVue.js!',
        msg2: 'Vue.js'
    },
    method: {
        changeMsg1: function () {
            this.msg1 = 'こんにちはVue.js';
        }
    }
});