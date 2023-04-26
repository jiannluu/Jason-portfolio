const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            favicon: path.join(__dirname, "./src/assets/favicon.ico")
        }),
        new Dotenv({ systemvars: true })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: ["ts-loader"],
                //exclude node_modules
                exclude: /node_modules/,
            },
            {
                test: /\.(sass|less|css)$/i,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: ["file-loader"],
            },
        ]
    },
    // pass all js files through Babel
    resolve: {
        extensions: [".*", ".js", ".jsx", ".tsx", ".ts"]
    }
}