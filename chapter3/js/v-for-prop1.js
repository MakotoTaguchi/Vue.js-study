var customers = [{
        id: 1,
        name: '大竹真',
        age: 35,
        sex: '男',
        pref: '東京都'
    },
    {
        id: 2,
        name: '山田太郎',
        age: 25,
        sex: '男',
        pref: '千葉県'
    },
    {
        id: 3,
        name: '井上五郎',
        age: 36,
        sex: '男',
        pref: '長野県'
    },
    {
        id: 4,
        name: '江藤花子',
        age: 18,
        sex: '女',
        pref: '東京都'
    }
];

var app = new Vue({
    el: '#app',
    data: {
        customers: customers
    },
    computed: {
        over30men: function () {
            return this.customers.filter(function (e) {
                return e.age >= 30 && e.sex == '男';
            });
        }
    }
});