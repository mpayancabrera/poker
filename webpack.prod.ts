import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import CopyWebPackPlugin from "copy-webpack-plugin";
import ImageMinWebpackPlugin from "imagemin-webpack-plugin";
import LodashModuleReplacementPlugin from "lodash-webpack-plugin";
import webpack from "webpack";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html"
});

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
        from: "./public/css",
        to: "css"
      },
      {
        from: "./public/js",
        to: "js"
      },
      {
        from: "./public/images",
        to: "images"
      },
      {
        from: "./public/favicon.ico",
        to: ""
      },
      {
        from: "./public/manifest.json",
        to: ""
      }
    ]),
    new ImageMinWebpackPlugin({
      pngquant: { quality: "60-80" },
      jpegtran: { progressive: true }
    }),
    new LodashModuleReplacementPlugin()
  ]
};

export default config;
