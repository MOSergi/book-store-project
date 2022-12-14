const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : "./src/index.tsx",
    output : {
        path : path.resolve(__dirname, "./build"),
        filename : "script.js"
    },
    module : {
        rules : [
            {
                test : /\.tsx?$/,
                exclude : /(node_modules|browser_components)/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : [
                            "@babel/preset-env",
                            [
                                "@babel/preset-react", {
                                    runtime : "automatic"
                                }
                            ],
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test : /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
                type : "asset/resource"
            }
        ]
    },
    devServer : {
        static : {
            directory : path.join(__dirname, "./src/resources")
        },
        historyApiFallback: true
    },
    resolve : {
        extensions : [".tsx", ".ts", ".js"]
    },
    plugins : [new HtmlWebpackPlugin({
        template : "./src/public/index.html"
    }), 
    new MiniCssExtractPlugin()]
}