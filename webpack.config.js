const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || "development"; // 기본값을 development로 설정

module.exports = {
  // TODO: 환경변수 NODE_ENV에 따라 development나 production 값을 설정하세요
  mode,
  entry: {
    main: "./src/app.js",
    controller: "./src/controllers/MainController.js"
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
      : []),
    new CopyPlugin([
      {
        from: "./node_modules/axios/dist/axios.min.js", //axios는 이미 node_modules에 위치해 있기 때문에 이를 웹팩 아웃풋 폴더에 옮기고 index.html에서 로딩해야한다
        to: "./axios.min.js" // 목적지 파일에 들어간다
      }
    ])
  ],
  // TODO: 여기에 최적화 설정을 구성하세요
  optimization: {
    minimizer:
      mode === "production"
        ? [
            new OptimizeCSSAssetsPlugin(),
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true // 콘솔 로그를 제거한다
                }
              }
            })
          ]
        : [],
    splitChunks: {
      chunks: "all" //build시 중복코드를 제거(코드스플리팅 적용시)
    }
  },
  externals: {
    axios: "axios"
  }
};

// 최적화설정 플러그인
// 1.optimize-css-assets-webpack-plugin: HtmlWebpackPlugin이 html 파일을 압축한것 처럼 css 파일도 빈칸을 없애는 압축을 해준다
// 2.terser-webpack-plugin: mode=production일 경우 사용되는 TerserWebpackPlugin은 자바스크립트 코드를 난독화하고 debugger 구문을 제거한다. 또한 추가적으로
// 콘솔로그를 제거하는 옵션을 제공한다

// 코드 스플리팅
// 코드를 압축하는 것 외에도 아예 결과물을 여러개로 쪼개면 좀 더 브라우져 다운로드 속도를 높일 수 있다.
// 큰 파일 하나를 다운로드 하는것 보다 작은 파일 여러개를 동시에 다운로드하는 것이 더 빠르기 때문이다.
// 대표적인 예로 엔트리를 여러개로 분리하는 것이다
// SplitChunksPlugin:코드를 분리할때 중복을 예방하는 플러그인이

// externals
// axios라이브러리는 패키지로 제공될때 이미 빌드 과정을 거쳤기 때문에 빌드 프로세스에서 제외하는 것이 좋다.
// 웹팩 설정중 externals가 바로 이러한 기능을 제공한다.

// axios는 이미 node_modules에 위치해 있기 때문에 이를 웹팩 아웃풋 폴더에 옮기고 index.html에서 로딩해야한다.
// 이떄 파일을 복사하는 CopyWebpackPlugin을 설치한다.
