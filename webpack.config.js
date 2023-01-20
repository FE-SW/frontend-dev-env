const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const apiMocker = require("connect-api-mocker");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  devServer: {
    overlay: true,
    stats: "errors-only",
    // TODO: 여기에 api 서버 프록싱 설정을 추가하세요
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    host: "dev.domain.com",
    port: 8081,
    historyApiFallback: true,
    // before: (app) => {
    //   app.get("/api/keywords", (req, res) => {
    //     res.json([
    //       { keyword: "이탈리아" },
    //       { keyword: "세프의요리" },
    //       { keyword: "제철" },
    //       { keyword: "홈파티" },
    //     ]);
    //   });
    // },
    before: (app) => {
      app.use(apiMocker("/api", "mocks/api"));
    },
    proxy: {
      "/api": "http://localhost:8081", // 프록시 (cors해결을 위한 프록시서버 설정)(mock server아니면 api서버 url 설정해주면 됨)
    },
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
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000, // 10Kb
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 바벨 로더를 추가한다
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `빌드 날짜: ${new Date().toLocaleString()}`,
    }),
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
      hash: process.env.NODE_ENV === "production",
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
};
// contentBase: 정적파일을 제공할 경로. 기본값은 웹팩 아웃풋이다.

// publicPath: 브라우져를 통해 접근하는 경로. 기본값은 '/' 이다.

// host: 개발환경에서 도메인을 맞추어야 하는 상황에서 사용한다. 예를들어 쿠기 기반의 인증은 인증 서버와 동일한 도메인으로 개발환경을 맞추어야 한다.
// 운영체제의 호스트 파일에 해당 도메인과 127.0.0.1 연결한 추가한 뒤 host 속성에 도메인을 설정해서 사용한다.

// overlay: 빌드시 에러나 경고를 브라우져 화면에 표시한다.

// port: 개발 서버 포트 번호를 설정한다. 기본값은 8080.

// stats: 메시지 수준을 정할수 있다. 'none', 'errors-only', 'minimal', 'normal', 'verbose' 로 메세지 수준을 조절한다.

// historyApiFallBack: 히스토리 API를 사용하는 SPA 개발시 설정한다. 404가 발생하면 index.html로 리다이렉트한다

//before에 설정한 미들웨어는 익스프레스에 의해서 app 객체가 인자로 전달되는데 Express 인스턴스다.
//이 객체에 라우트 컨트롤러를 추가할 수 있는데 app.get(url, controller) 형태로 함수를 작성한다

// 목업 api 작업이 많을때는 connect-api-mocker 패키지의 도움을 받자. 특정 목업 폴더를 만들어 api 응답을 담은 파일을 저장한 뒤
// 이 폴더를 api로 제공해 주는 기능을 한다.

