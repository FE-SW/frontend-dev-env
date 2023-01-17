/**
 * TODO: IE11에서도 동작하는 자바스크립트로 변환할수 있게 바벨을 구성하세요.
 */
module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
            targets: {
              chrome: "79",
              ie: "11", // ie 11까지 지원하는 코드를 만든다
            },
        },
        {
          useBuiltIns: "usage", // 폴리필 사용 방식 지정
          corejs: {
            // 폴리필 버전 지정
            version: 2,
          },
        },
      ],
    ],
  }

// 바벨은 세 단계로 빌드를 진행한다.

// 파싱(Parsing): 코드를 읽고 추상 구문 트리(AST)로 변환하는 단계
// 변환(Transforming): 추상 구문 트리를 변경하는 단계(플러그인)
// 출력 (Printing): 변경된 결과물을 출력하는 단계


// 바벨은 파싱과 출력만 담당하고 변환 작업은 플러그인이 처리한다


// npx babel --help: 바벨사용법
// npx babel 변환할파일: 바벨 모듈 실행

// @babel/cli: 커맨드라인 도구
// @babel/core: 바벨을 이용하기 위한 필수 패키지 
// @babel/plugin-transform-block-scoping: const,let -> var
// @babel/plugin-transform-arrow-functions: 화살표함수 -> 일반함수
// @babel/plugin-transform-strict-mode: 엄격모드

// 커맨드라인 명령어가 점점 길어질때는 babel.config.js 사용해 명령어를 축약해준다


// 프리셋:여러가지 플러그인을 모아둔 파일(ECMAScript2015+으로 코딩할 때 필요한 플러그인을 일일이 설정하는 일은 비효율적이기 떄문에)
// preset-env:  바벨을 실행하기 위해 필요한 플러그인들을 모아놓은 프리셋
// preset-flow: 플로우를 변한하기 위해 필요한 플러그인들을 모아놓은 프리셋
// preset-react: 리액트를 변한하기 위해 필요한 플러그인들을 모아놓은 프리셋
// preset-typescript: 타입스크립트를 변한하기 위해 필요한 플러그인들을 모아놓은 프리셋




// <preset-env 추가설정>:

// target: es6변환작업이 필요한 브라우저명과 버전을 적어 변환작업을 거침
// // babel.config.js :
// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           chrome: "79",
//           ie: "11", // ie 11까지 지원하는 코드를 만든다
//         },
//       },
//     ],
//   ],
// }

// polyfill: 바벨이 es5이하로 변환할 수 없는 문법을 변환작업 해주는것(예를들어 promise)
// // babel.config.js:
// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         useBuiltIns: "usage", // 폴리필 사용 방식 지정
//         corejs: {
//           // 폴리필 버전 지정
//           version: 2,
//         },
//       },
//     ],
//   ],
// }

// ===========================================================================
// babel-loader:바벨을 웹팩으로 통합해서 사용하게 해주는 웹팩 플러그인
// core-js:  폴리필 라이브러리 (웹팩은 바벨 로더가 만든 코드를 만나면 core-js를 찾을 것이기 때문에 추가 설치가 필요함)

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader", // 바벨 로더를 추가한다
//       },
//     ],
//   },
// }
