const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  devServer: {
    overlay: true,
    stats: "errors-only",
    proxy: {
      "/api": "http://localhost:8081"
    },
    // TODO: 여기에 핫로딩을 설정하세요
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000 // 10Kb
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" // 바벨 로더를 추가한다
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `빌드 날짜: ${new Date().toLocaleString()}`
    }),
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : ""
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true // 주석 제거
            }
          : false,
      hash: process.env.NODE_ENV === "production"
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : [])
  ]
};

// 웹팩 개발서버는 코드의 변화를 감지해서 전체 화면을 갱신하기 때문에 개발 속도를 높일 수 있다.
// 하지만 어떤 상황에서는 전체 화면을 갱신하는 것이 좀 불편한 경우도 있다.
// 싱글페이지어플리케이션은 브라우져에서 데이터를 들고 있기 때문에 리프레시 후에 모든 데이터가 초기화 되어 버리기 때문이다.
// 다른 부분을 수정했는데 입력한 폼 데이터가 날아가 버리는 경우도 있고 말이다.

// 핫 모듈 리플레이스먼트는 이러한 목적으로 제공되는 웹팩 개발서버의 한 기능이다.

