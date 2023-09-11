const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
	entry: path.join(__dirname, 'src', 'client.js'),
	output: {
		path: path.join(__dirname, 'build', 'client'),
		publicPath: 'client/'
	},
	plugins: [
		new VueSSRClientPlugin()
	],
	optimization: {
		splitChunks: {
			name: "manifest",
			minChunks: Infinity
		}
	}
});