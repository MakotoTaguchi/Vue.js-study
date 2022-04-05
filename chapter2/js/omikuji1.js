var app = new Vue({
    el: '#app',
    data: {
        kuji: 'figs/omikuji.png',
        kujis: ['daikichi.png', 'kichi.png', 'kyou.png']
    },
    methods: {
        uranau: function () {
            this.kuji = 'figs/' + this.kujis[Math.floor(Math.random() * this.kujis.length)];
        }
    }
});