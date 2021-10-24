const path = require('path')
// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const { context } = require('./webpack.config')
// const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
// const isProd = !isDev

const filename = (ext) => (isDev ? `[name].[contenthash].${ext}` : `[name].${ext}`)

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './js/index.js',
	output: {
		filename: `./js/${filename('js')}`,
		path: path.resolve(__dirname, 'build'),
		// clean: true,
		publicPath: ''
	},
	devServer: {
		historyApiFallback: true,
		open: true,
		static: {
			directory: path.join(__dirname, 'app')
		},
		compress: true,
		hot: true,
		port: 3000
	},
	plugins: [
		// new HTMLWebpackPlugin({
		// 	template: path.resolve(__dirname, 'src/index.html'),
		// 	filename: "index.html",
		// 	minify: {
		// 		collapseWhitespace: isProd
		// 	},
		// 	scriptLoading: "defer"
		// }),
		new MiniCssExtractPlugin({
			filename: `css/${filename('css')}`
		})
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: path.resolve(__dirname, 'src/assets'),
		// 			to: path.resolve(__dirname, 'app')
		// 		}
		// 	]
		// }),
		// new FileIncludeWebpackPlugin(
		// 		{
		// 			source: '/', // relative path to your templates
		//
		// 		},
		// )
	],
	module: {
		// rules: [
		// 	{
		// 		test: /\.html$/i,
		// 		loader: "html-loader"
		// 	},
		// 	{
		// 		test: /\.css$/i,
		// 		use: [
		// 			{
		// 				loader: MiniCssExtractPlugin.loader,
		// 				options: {
		// 					hmr: isDev
		// 				},
		// 			},
		// 			'css-loader']
		// 	},
		// 	{
		// 		test: /\.scss$/i,
		// 		use: [
		// 			{
		// 				loader: MiniCssExtractPlugin.loader,
		// 				options: {
		// 					publicPath: (resourcePath, content) => {
		// 						return path.relative(path.dirname(resourcePath), content) + '/'
		// 					}
		// 				}
		// 			},
		// 			'css-loader',
		// 			'sass-loader'
		// 		],
		// 	},
		// 	{
		// 		test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
		// 		use: [{
		// 			loader: "file-loader",
		// 			options: {
		// 				name: `./img/${filename('[ext]')}`
		// 			}
		// 		}]
		// 	}
		// ]
	}
}
