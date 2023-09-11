const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	output: {
		path: path.join(__dirname, 'build'),
	},
	resolve: {
		alias: {
			'scss': path.resolve(__dirname, 'src', 'scss')
		}
	},
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: isProduction
				}
			},
			{
	          test: /\.scss$/,
	          use: [
	            'vue-style-loader',
	            'css-loader',
				'sass-loader'
	          ]
	        }
		]
	},
	plugins: isProduction ? [
		new VueLoaderPlugin(),
		new ExtractTextPlugin({ filename: 'common.[chunkhash].css' })
	] :
	[
		new VueLoaderPlugin()
	]
}