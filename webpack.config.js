const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js", //파일경로는 index.html 기준
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    //js 외 파일을 모듈로 설정하는 loader 설정 부분
    rules: [
      {
        test: /\.css$/, //css 정규표현식
        use: ["style-loader", "css-loader"], //뒤에서부터 앞으로 실행됨
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist", //파일로더가 처리하는 파일을 모듈로 처리했을때 그경로앞에 추가되는 문자열이다
          name:'[name].[ext]?[hash]', //파일로가 아웃풋으로 복사할때 사용하는 파일이름 (원본명+파일확장자+해쉬)
          limit:20000, //20kb 미만의 파일은 url-loader로 base64로 변환, 이상이면 file-loader가 처리(url-loader일떄만 적용)
        },
      },
    ],
  },
};
//*css-loader: css파일을 자바스크립트 모듈로 바꿔주는 로더

//*style-loader: 자바스크립트로 변경된 스타일시트 코드를 html에 넣어주는 로더(브라우저에 스타일이 적용되게)
// 모듈로 변경된 스타일 시트는 돔에 추가되어야만 브라우져가 해석할 수 있다. css-loader로 처리하면 자바스크립트 코드로만 
// 변경되었을 뿐 돔에 적용되지 않았기 때문에 스트일이 적용되지 않았다.
// style-loader는 자바스크립트로 변경된 스타일을 동적으로 돔에 추가하는 로더이다. CSS를 번들링하기 위해서는 css-loader와 style-loader를 함께 사용한다

//*file-loader: 이미지 파일을 자바스크립트 모듈로 바꿔주는 로더(바꾼 모듈을 build output으로 이동)
//webpack은 이미지파일을 build할떄마다 해쉬값으로 유니크한 이름을 지정 (캐시갱신을 위해, 정적파일은 브라우저에서 
//자바스크립트,css,이미지,폰트의 성능을 위해서 캐싱을하는데 파일의 내용을 다른데 이름의 같은경우 캐시저장이 되는데 이를 예방하기위해 이름을 변경함)

//*url-loader: 사용하는 이미지 갯수가 많다면 네트웍 리소스를 사용하는 부담이 있고 사이트 성능에 영향을 줄 수도 있다. 
//만약 한 페이지에서 작은 이미지를 여러 개 사용한다면 Data URI Scheme을 이용하는 방법이 더 나은 경우도 있다. 
//이미지를 Base64로 인코딩하여 문자열 형태로 소스코드에 넣는 형식이다.url-loader는 이러한 처리를 자동화해주는 녀석이다.
//url-loader는  file-loader 대신에 사용한다
