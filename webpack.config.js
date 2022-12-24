const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    //loader
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          //publicPath:'./dist/ : html파일이 dist폴더로 옮겨졌기떄문에(HtmlWebpackPlugin 으로 인해) 지워줌
          name: "[name].[ext]?[hash]",
          limit: 10000, // 10Kb
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      //결과물에 빌드 정보나 커밋 버전같은 걸 추가해주는 플러그인
      banner: () => `빌드 날짜: ${new Date().toLocaleString()}`,
    }),
    new webpack.DefinePlugin({
      // "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      // "api.domain": JSON.stringify("http://dev.api.domain.com"),
      // TWO: "1+1", console.log(TWO) //2
      // TWO: "1+1", console.log(TWO) //"1+1"
    }), //환경 정보를 제공해주는 플러그인( process.env.NODE_ENV = development,production),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 템플릿 경로를 지정
      templateParameters: {
        // 템플릿에 주입할 파라미터 변수 지정
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "(배포용)",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
    }),
    new CleanWebpackPlugin(), // 빌드 이전 결과물을 제거하는 플러그인
    ...(process.env.NODE_ENV === "production" // 번들결과에서 트일시트 코드만 뽑아서 별도의 CSS 파일로 추출해주는 플러그인
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
  /**
   * TODO: 아래 플러그인을 추가해서 번들 결과를 만들어 보세요.
   * 1. BannerPlugin: 결과물에 빌드 시간을 출력하세요.
   * 2. HtmlWebpackPlugin: 동적으로 html 파일을 생성하세요.
   * 3. CleanWebpackPlugin: 빌드 전에 아웃풋 폴더를 깨끗히 정리하세요.
   * 4. MiniCssExtractPlugin: 모듈에서 css 파일을 분리하세요.
   */
};

// BannerPlugin:결과물에 빌드 정보나 커밋 버전같은 걸 추가 해주는 플러그인

// DefinePlugin:어플리케이션은 개발환경과 운영환경으로 나눠서 운영한다. 가령 환경에 따라 API 서버 주소가 다를 수 있다.
// 같은 소스 코드를 두 환경에 배포하기 위해서는 이러한 환경 의존적인 정보를 소스가 아닌 곳에서 관리하는 것이 좋다. 웹팩은 이러한 환경 정보를 제공해주는 플러그인이다
// 빈 객체를 전달해도 기본적으로 넣어주는 값이 있다. 노드 환경정보인 process.env.NODE_ENV 인데 웹팩 설정의 mode에 설정한 값이 여기에 들어간다.
// "development"를 설정했기 때문에 어플리케이션 코드에서 process.env.NODE_ENV 변수로 접근하면 "development" 값을 얻을 수 있다.
// 또한 빌드 타임에 결정된 값을 어플리이션에 전달할 때는 이 플러그인을 사용

// HtmlWebpackPlugin: HTML 파일을 후처리해주고, 빌드 타임의 값을 넣거나 코드를 압축해주는 플러그인 이다
// NODE_ENV=development npm run build 명령어 실행

// CleanWebpackPlugin: 빌드 이전 결과물을 제거하는 플러그인이다.

// MiniCssExtractPlugin:/ 번들결과에서 트일시트 코드만 뽑아서 별도의 CSS 파일로 추출해주는 플러그인이다
// 브라우져에서 큰 파일 하나를 내려받는 것 보다, 여러 개의 작은 파일을 동시에 다운로드하는 것이 더 빠르다.

