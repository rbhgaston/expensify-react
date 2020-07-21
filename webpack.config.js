const path = require('path')

module.exports= {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    // you can add options here without creating .babelrc file
                    // .babelrc solves more problems like jest
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}