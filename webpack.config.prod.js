var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var env = process.env.BUILD_ENV;

module.exports = {
	entry: './client/index',
	output: {
		path: path.join(__dirname, `build/${env}`),
		filename: `main.js`,
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin(`main.css`, {
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{ from: 'dist' }
		]),
		new HtmlWebpackPlugin({
			inject: false,
			template: 'views/index.ejs'
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.(scss|css)$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline',
				include: path.join(__dirname, 'client')
			}
		]
	},
	postcss: function () {
		return {
			defaults: [autoprefixer],
			cleaner:  [autoprefixer({ browsers: ['last 2 versions', 'iOS 7'] })]
		};
	}
};
