const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
	entry: path.join(__dirname, 'src', 'server.js'),
	output: {
		path: path.join(__dirname, 'build', 'server'),
		publicPath: 'server/'
	},
	target: 'node',
	devtool: 'source-map',
	output: {
		libraryTarget: 'commonjs2'
	},
	externals: nodeExternals({
		whitelist: /\.css$/
	}),
	plugins: [
		new VueSSRServerPlugin()
	]
});