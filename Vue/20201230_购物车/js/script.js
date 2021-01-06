// 组件 - 商品列表
// <product-list :data="商品数据来源" :cart="购物车数据"></product-list>
Vue.component('product-list', {
    props: ['data', 'cart'],
    methods: {
        addCart: function (index) {
            // 要添加的数据
            var data = {};

            // 购物车数据
            var cart = this.cart;

            // 解除引用
            Object.assign(data, this.data[index]);

            // 判断是否重复添加
            if (cart.list[data.id] != undefined) {
                // 若重复，增加数量
                cart.list[data.id].count += 1;
                return false;
            }

            // 设置当前商品数量
            data.count = 1;

            // 更新购物车商品数量
            cart.count += 1;

            // 添加
            this.$set(cart.list, data.id, data);
        }
    },
    template: `<ul class="prolist">
        <li v-for="(item, index) in data" :data-index="index" :key="item.id">
            <a href="#" class="img" draggable="false">
                <img :src="item.img" draggable="false" />
            </a>
            <a href="#" class="title" draggable="false">{{ item.name }}</a>
            <span>&yen;{{ item.price }}</span>
            <a href="javascript:void(0);" class="addcart" draggable="false" @click="addCart(index)">加入购物车</a>
        </li>
    </ul>`
});

// 组件 - 购物车商品列表
// <cart-list :data="购物车数据"></cart-list>
Vue.component('cart-list', {
    props: ['data'],
    methods: {
        /**
         * 修改数量
         * 
         * @param {string} id 商品 ID
         * @param {string} mode 模式：add / sub
         */
        countCtrl: function (id, mode) {
            var data = this.data.list[id];

            if (mode == 'add') {
                data.count += 1;
            } else if (mode == 'sub') {
                data.count -= 1;
            }
        }
    },
    template: `<ul class="cartlist">
        <li v-for="item in data.list">
            <a href="#" draggable="false">
                <img :src="item.img" />
            </a>
            <div>
                <a href="#" draggable="false">{{ item.name }}</a>
                <p>
                    <span class="price">单价：&yen;{{ item.price }}</span>
                    <span @click="countCtrl(item.id, 'sub')">-</span>
                    <input type="number" v-model.number="item.count" />
                    <span @click="countCtrl(item.id, 'add')">+</span>
                </p>
            </div>
        </li>
    </ul>`
});

var vm = new Vue({
    el: '#shop',
    data: {
        // 商品数据
        products: productList,
        // 购物车
        shopcart: {
            // 商品数量
            count: 0,
            // 商品列表
            list: {}
        }
    },
    methods: {
        clearCart: function () {
            var data = this.$data.shopcart;

            if (data.list.length === 0) {
                return false;
            }

            var isConfirmed = confirm('确定要清空吗？');

            if (isConfirmed) {
                data.list = {};
                data.count = 0;
            }
        },
        test: function (e) {
            console.log(e.target);
        }
    },
    computed: {
        sumPrice: function () {
            var list = this.shopcart.list;
            var sum = 0;

            for (let key in list) {
                sum += list[key].price * list[key].count;
            }

            return sum;
        }
    },
    watch: {
        'shopcart.list': {
            handler: function (itemsNew) {
                // 校验
                for (let key in itemsNew) {
                    if (itemsNew[key].count === 0) {
                        var isConfirmed = confirm('确定从购物车中删除该商品吗？');

                        if (isConfirmed) {
                            // 删除
                            this.$delete(itemsNew, key);
                        } else {
                            itemsNew[key].count = 1;
                        }
                    } else if (itemsNew[key].count < 0 || itemsNew[key].count == '') {
                        itemsNew[key].count = 1;
                    }
                }
            },
            deep: true
        }
    }
});

$(function () {
    $('.prolist').on('click', '.addcart', function (e) {
        var ball = $('#ball').css({
            left: e.pageX,
            top: e.pageY,
            zIndex: 1000
        }).show();

        var bool = new Parabola({
            el: ball,
            offset: [$('#btn-shopcart').offset().left - e.pageX, $('#btn-shopcart').offset().top - e.pageY],
            curvature: 0.0003,
            duration: 500,
            callback: function () {
                ball.hide();
            }
        });

        bool.start();
    });

    $('.cart').hover(function () {
        $('.cart').stop().animate({
            right: 0
        });
    }, function () {
        $('.cart').stop().animate({
            right: -305
        })
    })
});
