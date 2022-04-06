var app = new Vue({
    el: '#app',
    data: {
        name: '田中一郎',
        dateOfBirth: new Date('2000/9/10')
    },
    computed: {
        age: function () {
            var today = new Date();
            // 今年の誕生日
            var birthdayOfThisYear = new Date(
                today.getFullYear(),
                this.dateOfBirth.getMonth(),
                this.dateOfBirth.getDate()
            );
            // 年齢を求める
            var age = today.getFullYear() - this.dateOfBirth.getFullYear();
            // 誕生日が過ぎてなければ1を引く
            if (today < birthdayOfThisYear) {
                --age;
            }
            return age;
        },
        fare: function () {
            // 13才以上1000円、13才未満500円
            if (this.age > 13) {
                return 1000;
            } else {
                return 500;
            }
        }
    }
});