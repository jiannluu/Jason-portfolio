const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html")
        })
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
            }
        ]
    },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
    }
}