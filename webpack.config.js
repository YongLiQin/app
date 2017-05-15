const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpackDevServer = require("webpack-dev-server");
module.exports = {
	entry: {
		friend: "./src/javascripts/friend.js",
		map: "./src/javascripts/map.js",
		activity: "./src/javascripts/activity.js",
		register: "./src/javascripts/register.js",
		nearby: "./src/javascripts/nearby.js",
		group: "./src/javascripts/group.js",
		friendcenter: "./src/javascripts/friendcenter.js",
		person: "./src/javascripts/person.js",
		chat: "./src/javascripts/chat.js",
		land: "./src/javascripts/land.js",
		member: "./src/javascripts/member.js",
		chatroom: "./src/javascripts/chatroom.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: path.join(__dirname, "node_modules/"),
				include: path.join(__dirname, "src/javascripts"),
				use: [
					{
						loader: "babel-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpg|png|svg|gif)$/i,
				use: [{
					loader: "file-loader",
					options: {
						name: "assets/[name]-[hash:5].[ext]"
					}
				}]
				
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader"
				}]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./src/friend.html",
			chunks: ["friend"],
			inject: "body",
			filename: "friend.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/map.html",
			chunks: ["map"],
			inject: "body",
			filename: "map.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/activity.html",
			chunks: ["activity"],
			inject: "body",
			filename: "activity.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/register.html",
			chunks: ["register"],
			inject: "body",
			filename: "register.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/nearby.html",
			chunks: ["nearby"],
			inject: "body",
			filename: "nearby.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/group.html",
			chunks: ["group"],
			inject: "body",
			filename: "group.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/friendcenter.html",
			chunks: ["friendcenter"],
			inject: "body",
			filename: "friendcenter.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/person.html",
			chunks: ["person"],
			inject: "body",
			filename: "person.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/chat.html",
			chunks: ["chat"],
			inject: "body",
			filename: "chat.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/land.html",
			chunks: ["land"],
			inject: "body",
			filename: "land.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/member.html",
			chunks: ["member"],
			inject: "body",
			filename: "member.html"
		}),
		new htmlWebpackPlugin({
			template: "./src/chatroom.html",
			chunks: ["chatroom"],
			inject: "body",
			filename: "chatroom.html"
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					require("autoprefixer")({
						browsers: ["last 5 versions"]
					})
				]
			}
		})
	]
};