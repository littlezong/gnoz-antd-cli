const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'react-router-dom'],
		app: [
			'babel-polyfill',
			path.resolve(__dirname, '../src/index.jsx')
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[hash:8].js',
		chunkFilename: 'js/[name].js'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		rules: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /\.css$/,
			include: path.resolve(__dirname, '../src'),
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader']
			})
		}, {
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'less-loader']
			})
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			include: path.resolve(__dirname, '../src'),
			use: [
				{
					loader: 'url-loader',
					options: {
						name: 'img/[name].[ext]',
						limit: 10000,
						publicPath: './'
					}
				}
			]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: 'url-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html')
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].[contenthash].css',
			allChunks: true
		})
	],
	stats: {
		chunks: false,
		errorDetails: true,
		timings: true
	}
};