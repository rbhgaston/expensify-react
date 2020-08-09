const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports= (env) => {
    const isProd = env === 'production'
    // env works only in dev or test
// in prod env vars are se tby heroku
    const configEnv = process.env.NODE_ENV === 'test' ? 'test' : 'dev'

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
            new MiniCssExtractPlugin({filename: 'styles.css'}),
            ...(isProd ? [] : [new Dotenv({path: `./config/.env.${configEnv}`})])
        ],
        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserJSPlugin(),
                // to add inline source map set map: {inline: true}
                // to add stand-alone source map files set map: {inline: false, annotation: true}
                // annotation that cssnano built on postcss adds the comment url to source map
                new OptimizeCssAssetsPlugin({
                    cssProcessorOptions: {
                        map: {
                            inline: false,
                            annotation: true
                        }
                    }
                })
            ]
        },
        // inline is slow but enables source map for separated css files
        // cheap-module-eval-source-map
        devtool: isProd ? 'source-map' : 'cheap-module-source-map',
        devServer: {
            publicPath: '/dist/',
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}