/**/
const path = require("path");
const webpack = require("webpack");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const fontMagician = require('postcss-font-magician');
console.log(fontMagician);

module.exports = {
    entry: ['babel-polyfill','./frontEnd/src/index.js'],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './frontEnd/dist/'),
        library: "reactMODULES"
    },
    watch: true,
    devtool:"source-map",
    resolve: {
        modules: ['node_modules'],
        extensions: [".js"]
    },
    plugins: [
      //  new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new StyleLintPlugin({
           files: 'frontEnd/style/**/*.css'
        })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'es2017',"stage-0"]
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: {
                    loader: 'url-loader?name=[name]-[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader?parser=postcss-scss',
                        options: {

                        }
                    }
                ]
            },
            {
                test: /(\.js$|\.jsx$)/,
                exclude: /node_modules/,
                use: {
                    loader: "eslint-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    },

    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: path.join(__dirname,"/frontEnd")
    }
};
