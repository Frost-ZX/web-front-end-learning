var vm = new Vue({
    el: '#app',
    data: {
        current: 0,
        isChanging: false,
        isNext: false
    },
    methods: {
        changeTab: function (index) {
            var data = this.$data;

            if (data.isChanging || index === data.current) {
                return false;
            }

            data.isNext = (index > data.current);

            data.current = index;
            data.isChanging = true;
        }
    },
});
