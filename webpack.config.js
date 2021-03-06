var debug             = process.env.NODE_ENV !== "production";
var webpack           = require('webpack');
var path              = require('path');


module.exports = {
    context: __dirname,
    entry: './public/entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'],
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.woff$/,
            loader: "url-loader?prefix=font/&limit=5000"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?prefix=font/&limit=5000"
        }, {
            test: /\.(eot|ttf|svg|gif|png)$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],

}