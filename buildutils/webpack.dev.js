const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		compress: true,
		hot: true,
		port: 3000,
		historyApiFallback: true,
	},
});
