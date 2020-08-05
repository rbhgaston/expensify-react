const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports= (env) => {
    const isProd = env === 'production'
    // console.log(env)

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
                    // use:['style-loader', 'css-loader', 'sass-loader'] //bundled with js file
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new TerserJSPlugin(),
                // this plugin disables stand-alone source maps and allows only the inline ones
                // new OptimizeCssAssetsPlugin({
                //     cssProcessorOptions: {
                //         map: {
                //             inline: true
                //         }
                //     }
                // })
            ]
        },
        // inline is slow but enables source map for separated css files
        // cheap-module-eval-source-map
        devtool: isProd ? 'source-map' : 'inline-source-map',
        devServer: {
            publicPath: '/dist/',
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}