var app = new Vue({
    el: '#app',
    data: {
        storagekey: 'todolist',
        newtodo: '',
        todolist: []
    },
    methods: {
        addTodo: function () {
            if (this.newtodo == '') return;
            this.todolist.push({
                text: this.newtodo,
                done: false,
                hover: false
            });
            this.newtodo = '';
        },
        remove: function (index) {
            if (this.todolist[index].done == true) {
                this.todolist.splice(index, 1);
            }
        }
    },
    watch: {
        todolist: {
            handler: function () {
                localStorage.setItem(
                    this.storagekey,
                    JSON.stringify(this.todolist)
                );
            },
            deep: true
        }
    },
    created: function () {
        var dataStr = localStorage.getItem(this.storagekey);
        if (dataStr) {
            this.todolist = JSON.parse(dataStr);
        }
    },
});