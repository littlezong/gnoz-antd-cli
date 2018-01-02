const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { production } = require('./config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base');

let prodWebpackConfig = {...baseWebpackConfig};
prodWebpackConfig.plugins.push(
	new CleanWebpackPlugin(['js', 'css'], {
		root: path.resolve(__dirname, '../dist')
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: "vendor",
		// filename: "vendor.js"(给 chunk 一个不同的名字)
		minChunks: Infinity // (随着 entry chunk 越来越多，这个配置保证没其它的模块会打包进 vendor chunk)
	})
);

if(production.isAnalyseBundle) prodWebpackConfig.plugins.push(
	new BundleAnalyzerPlugin({
		analyzerPort: 8899,
		openAnalyzer: true
	})
);

module.exports = {
	...prodWebpackConfig,
	devtool: 'cheap-module-source-map'
};