var vm = new Vue({
    el: '#todo-list',
    data: {
        // 待办事项列表
        todoList: {
            '1': {
                'text': '第 1 条默认待办事项',
                'completed': true
            },
            '2': {
                'text': '第 2 条默认待办事项',
                'completed': false
            },
            '3': {
                'text': '第 3 条默认待办事项',
                'completed': true
            },
            '4': {
                'text': '第 4 条默认待办事项',
                'completed': false
            }
        },
        // 最后一项的 ID
        lastID: 4,
        // 是否显示动画
        isAnimate: false,
        // 显示类型（all / complete / incomplete ）
        showType: 'all'
    },
    methods: {
        // 添加
        addNew: function (e) {
            var target = e.target;
            var data = this.$data;

            // 判断
            if (target.value == '') {
                return false;
            }

            // 开启动画
            data.isAnimate = true;
            // 更新 ID
            data.lastID += 1;
            // 设置
            this.$set(data.todoList, data.lastID, { 'text': target.value, 'completed': false });
            // 清空输入
            target.value = ''; 
        },
        // 删除 - 单个
        delItem: function (e, id) {
            // 阻止事件冒泡
            e.stopPropagation();

            var data = this.$data;
            var confirmMsg = '是否确定删除该待办事项：\n' + data.todoList[id].text;

            // 确认
            if (!confirm(confirmMsg)) {
                return false;
            }

            data.isAnimate = true;           // 开启动画

            this.$delete(data.todoList, id); // 删除
        },
        // 删除 - 全部
        delAll: function () {
            // 确认
            if (!confirm('是否确定删除全部待办事项？')) {
                return false;
            }

            var data = this.$data;

            data.isAnimate = true; // 开启动画
            data.todoList = {};    // 清空
            data.lastID = 0;       // 复位 ID
        },
        // 标记已完成
        markComplete: function (id) {
            var data = this.$data;
            var item = data.todoList[id];

            // 开启动画
            data.isAnimate = true;

            // 设置
            this.$set(item, 'completed', !item.completed);
        },
        // 切换显示类型
        switchType: function (type) {
            var data = this.$data;

            data.isAnimate = false; // 关闭动画
            data.showType = type;   // 更改类型
        },
        // 是否能显示
        isShow: function (isComplete) {
            var data = this.$data;
            var type = data.showType;

            return (type == 'all') || (type == 'complete' && isComplete) || (type == 'incomplete' && !isComplete);
        }
    }
});
