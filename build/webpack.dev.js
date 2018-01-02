const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { development } = require('./config');
const baseWebpackConfig = require('./webpack.base');

let devWebpackConfig = {...baseWebpackConfig};
devWebpackConfig.plugins.push(
	new webpack.HotModuleReplacementPlugin()
);

if(development.isAnalyseBundle) devWebpackConfig.plugins.push(
	new BundleAnalyzerPlugin({
		analyzerPort: 8898,
		openAnalyzer: true
	})
);

module.exports = {
	...devWebpackConfig,
	devServer: {
		host: "localhost",
		contentBase: path.resolve(__dirname, '../src'),
		port: development.port,
		open: development.autoOpenBrowser,
		compress: false,
		inline: true,
		historyApiFallback: true,
		// overlay: {
		// 	errors: true,
		// 	warnings: true,
		// }
	},
	devtool: 'cheap-module-eval-source-map'
};