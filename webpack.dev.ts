import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import CopyWebPackPlugin from "copy-webpack-plugin";
import { resolve } from "path";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html"
});

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [resolve(__dirname, "./src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new CopyWebPackPlugin([
      {
        from: "./public/favicon.ico",
        to: ""
      },
      {
        from: "./public/manifest.json",
        to: ""
      }
    ])
  ]
};

export default config;
