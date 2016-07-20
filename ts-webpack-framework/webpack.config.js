var path = require("path");
var webpack = require('webpack');
module.exports = {
    entry: './web/ts/Main.ts',
    output: {
        filename: './dist/impublic/pc/js/app/main.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            //jquery: 'libs/jquery/jquery-2.1.3.min.js',
           jquery: './web/js/libs/zepto/zepto.min.js',
            bone: './web/js/libs/bone/bone.min.js',
            jstween: './web/js/libs/jstween/jstween.min.js',
            csstween: './web/js/libs/csstween/csstween.min.js',
            css3d: './web/js/libs/css3d/css3d.min.js',
            json: './web/js/libs/json/json2.min.js'
        }
    }, externals: {
       // jquery: '$'
    },
    module: {
        loaders: [
          //  {test: /\.css$/, loader: 'style!css'},
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.ts$/, loader: 'webpack-typescript'},
            {test: /\.(png|jpg|gif|mp3)$/, loader: 'url-loader?limit=2024000000'},
            { test: /\.html$/, loader: 'html-loader'},
            {test: /\.json$/, loader: "json"}
        ]
    }, plugins: [
        //banner
        //new webpack.BannerPlugin('This file is created by GhostCC'),
        //压缩
       // new webpack.optimize.UglifyJsPlugin(),
        //
        //定义Windows变量 console.log(__VERSION)
        new webpack.DefinePlugin({
            __VERSION: 0.2,
            __DEBUG: true,
        }),
        //
        //通用的 lib
        /*new webpack.optimize.CommonsChunkPlugin({
         name: "lib",
         filename: "lib.js",
         minChunks: Infinity,
         //chunks: ["entryA", "entryB"]
         }),*/
        // 不需要写require
        new webpack.ProvidePlugin({
            /*test: "test",
            $: 'jquery',
            Bone: 'bone',
            Athena: 'athena',
            JT: 'jstween',
            CT: 'csstween',
            C3D: 'css3d',
            Map: 'map',
            Model: 'model',
            Router: 'router',
            BasePage: 'page',
            BasePop: 'pop',*/
        })
    ]
}