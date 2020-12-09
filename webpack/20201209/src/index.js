import './style.css';
import './style.less';
import './style.scss';
import pic1 from './test_1.jpg';
import pic2 from './test_2.jpg';

window.addEventListener('load', function () {
    console.log('Hello, Webpack');

    // 图片

    (function () {
        var target = document.querySelector('.image');
        var imgElem = document.createElement('img');

        imgElem.src = pic1;
        imgElem.width = '400'
        target.appendChild(imgElem);
    })();

    (function () {
        var target = document.querySelector('.image');
        var imgElem = document.createElement('img');

        imgElem.src = pic2;
        imgElem.width = '400'
        target.appendChild(imgElem);
    })();

    // ES6 转 ES5

    (() => {
        var arr = [10, 20, 30, 40];

        arr.forEach((i, v) => {
            console.log(i, v);
        });
    })();
});
