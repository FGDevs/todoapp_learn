const path    = require("path")
const webpack = require("webpack")

module.exports = {
    entry   : "./src/index.js",
    // -> to tell Webpack where application starts and where to start bundling the files
    mode    : "development",
    // -> to save from having to add 'development' flag on initial run
    module  : {
        rules: [
            {
                test   : /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader : "babel-loader",
                options: { presets: ["@babel/preset-env"]}
            },
            {
                test: /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    resolve : { extensions: ["*", ".js", ".jsx"] },
    output  : {
        path      : path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename  : "bundle.js"
    },
    // -> to tell Webpack where to put bundled code
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port       : 3000,
        publicPath : "http://localhost:3000/dist/",
        hotOnly    : true
    },
    plugins: 
    [new webpack.HotModuleReplacementPlugin()]
}