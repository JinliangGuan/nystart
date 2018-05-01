const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    mode:'production',
    devtool:'null',

    entry:  __dirname + '/app/main.js', //已多次提及的唯一入口文件
    output:{
            path:__dirname + '/build',  //打包后的文件存放的地方
            filename:'bundle-[hash].js'         //打包后输出文件的文件名
        },
    
    devServer:{
        contentBase:'./public',//本地服务器所加载的页面所在目录
        historyApiFallback:true,//不跳转
        inline:true,//实时刷新
        hot:true
    },
    // optimization: {   //这里是OptimizeCSSAssetsPlugin用的配置
    //     splitChunks: {
    //         cacheGroups: {
    //           styles: {
    //             name: 'styles',
    //             test: /\.css$/,
    //             chunks: 'all',
    //             enforce: true
    //           }
    //         }
    //       }
    // },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                    // options:{              //把babel的配置提取到单独.babelrc文件
                    //     presets:["env","react"]
                    // }
                },
                exclude:/node_modules/
            },
            // {
            //     test:/\.css$/,       //这里是使用MiniCssExtractPlugin的配置
            //     use:[
            //         {
            //             loader:"style-loader"
            //         },
            //         {
            //             loader:MiniCssExtractPlugin.loader
            //         },
            //         {
            //             loader:"css-loader",
            //             options:{
            //                 module:true,
            //                 localIdentName:'[name]__[local]--[hash:base64:5]'
            //             }
            //         },{
            //             loader:"postcss-loader"
            //         }

            //     ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                        {
                            loader:"css-loader",
                            options:{
                                module:true,
                                localIdentName:'[name]__[local]--[hash:base64:5]'
                            }
                        },{
                            loader:"postcss-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
        // new MiniCssExtractPlugin({
        //     filename: "style.css",
        //     // chunkFilename: "[id].css"
        // })
        
    ],

}
