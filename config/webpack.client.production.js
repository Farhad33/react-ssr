const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
	entry: './src/client',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../public')
	},
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
};


module.exports = merge(baseConfig, config);
