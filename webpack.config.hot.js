var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, 'client/index.js')
	],
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'main.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					"plugins": [["react-transform", {
						"transforms": [{
							"transform": "react-transform-hmr",
							"imports": ["react"],
							"locals": ["module"]
						}, {
							"transform": "react-transform-catch-errors",
							"imports": ["react", "redbox-react"]
						}, {
							"transform": "react-transform-catch-errors",
							"imports": ["react", "redbox-react"]
						}]
					}]]
				},
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.(scss|css)$/,
				loader: 'style!css!sass!postcss',
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline',
				include: path.join(__dirname, 'client/icons')
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	postcss: function () {
		return {
			defaults: [autoprefixer],
			cleaner:  [autoprefixer({ browsers: ['last 2 versions', 'iOS 7'] })]
		};
	}
};