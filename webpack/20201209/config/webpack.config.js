// 加载 path 模块
const path = require('path');
// 引入 html-webpack-plugin 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入 mini-css-extract-plugin 插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // 打包入口
    entry: './src/index.js',

    // 打包出口
    output: {
        // 打包文件输出路径
        path: path.resolve(__dirname, '../dist/'),
        // 打包后的文件名
        filename: 'bundle.js'
    },

    devServer: {
        // 打包文件的输出路径
        contentBase: path.resolve(__dirname, '../dist/'),
        // 压缩
        compress: true,
        // 端口
        port: 9000,
        // 是否自动打开浏览器
        open: false
    },

    module: {
        // 规则
        rules: [
            // CSS
            {
                // 文件匹配规则（正则）
                test: /\.css$/,
                // 匹配到的文件要使用的 Loader
                use: [
                    // { loader: 'style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' }
                ]
            },
            // LESS
            {
                test: /\.less$/,
                use: [
                    // { loader: 'style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            // SASS
            {
                test: /\.(sass|scss)$/,
                use: [
                    // { loader: 'style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            // 图片
            // {
            //     test: /\.(gif|jpg|jpeg|png|webp)$/,
            //     use: [
            //         { loader: 'file-loader' }
            //     ]
            // },
            {
                test: /\.(gif|jpg|jpeg|png|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 图片大小限制，单位 byte
                            // 图片小于设定值时会被转换为 base64，
                            // 否则使用 file-loader 处理
                            limit: 102400
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                // 排除文件夹
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // 预设
                            // env：ES6 转换为 ES5
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // 通过构造函数传递参数

        // HTML 模板
        new HtmlWebpackPlugin({
            // 网页标题
            // 需要修改 HTML 文件
            // <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'html-webpack-plugin 插件',

            // 模板文件路径（相对于项目根目录）
            template: './src/template.html',

            // 插入打包的 JavaScript 文件
            // true：script 标签位于 HTML 文件的 body 标签底部，默认值
            // body：script 标签位于 HTML 文件的 body 标签底部
            // head：script 标签位于 HTML 文件的 head 标签中
            // false：不插入打包的 JavaScript 文件
            inject: true,

            // 压缩规则
            minify: {
                // 是否移除空格
                collapseWhitespace: true,
                // 是否移除属性值的引号
                removeAttributeQuotes: false,
                // 是否移除注释
                removeComments: true
            },

            // 输出的 HTML 文件名
            filename: 'index.html'
        }),

        // CSS 分离
        new MiniCssExtractPlugin({
            // 输出的 CSS 文件名
            filename: 'bundle.css',
        })
    ]
}
