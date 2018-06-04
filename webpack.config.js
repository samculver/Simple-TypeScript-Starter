const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/build"
    },
    entry: ["./src/app.ts"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js",
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src"),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [new MiniCssExtractPlugin({filename: "styles.css"})]
}