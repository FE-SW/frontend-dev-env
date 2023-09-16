# 프론트엔드 개발 환경 설정

## Node.js

### 프론트엔드 개발에 Node.js가 필요한 이유

브라우저에서 동작하는 웹페이지를 제작한다는 것은 브라우저가 아닌 컴퓨터에서 진행한다는 것이고, 
그 컴퓨터가 웹페이지를 제작할때 Node.js가 다양한 역할을 한다.

웹개발을 도와주는 모듈을 설치할 필요가 있는데, 이 모듈들은 브라우저가 인식하지 못한다(html,css,js가 아니라)
이떄 nodejs가 이러한 모듈을 브라우저가 아닌 nodejs환경에서 동작할 수 있도록 도와준다.

1.최신 스펙으로 개발할 수 있다.
  * 자바스크립트의 발전에 비해 브라우저의 지원 속도는 느리기 때문에 babel 같은 도구가 필요함 (babel은 nodejs환경에서 사용가능)
  * 웹팩, npm 같은 노드기술을 사용해 자동화된 프론트엔드 개발환경을 갖출 수 있음
  * typescript, sass 같은 고수준 프로그래밍 언어를 사용하려면 node.js 환경에서 돌아가는 트랜스파일러가 필요함

2.빌드 자동화
  * 파일 압축, 코드 난독화(코드를 알아보기 힘들게하는것), 폴리필 추가 등의 작업을 거친후 배포
  * 라이브러리 의존성을 해결하고, 각종 테스트를 자동화

3.개발 환경 커스터마이징
  * 개발환경을 직접 커스터마이징 할 수 있다.

## NPM

npm은 Node Package Manager의 약자로, JavaScript 프로그래밍 언어를 위한 패키지 매니저이다. <br/>
Node.js와 밀접하게 연결되어 있으며, Node.js 애플리케이션에서 사용되는 라이브러리나 도구들을 관리하는 데 주로 사용된다. <br/>
npm init 명령어를 사용하면 package.json에 정보를 기록하고 프로젝트를 초기화 한다.

### [특징/기능]

1.종속성 관리: 
  * npm을 사용하면 프로젝트에 필요한 모든 라이브러리와 도구의 버전을 쉽게 관리할 수 있다. 이러한 종속성 정보는 package.json 파일에 저장된다.

2.스크립트 실행: 
  * package.json 파일에서는 사용자 정의 스크립트도 정의할 수 있다. 이 스크립트는 빌드, 테스트, 배포와 같은 작업을 자동화하는 데 사용될 수 있다.

3.전역 vs 로컬 설치: 
  * npm을 사용하여 패키지를 전역적으로 설치할 수도 있고, 특정 프로젝트 내부에만 설치할 수도 있다.
  * npm이 없던시절에는 외부 패키지을 스크립트파일 내에 CDN형식으로 불러왔다면, 요새는 npm install 명령어를 통해 쉽게 패키지를 설치할 수 있다.

## Webpack

웹팩(Webpack)은 현대 JavaScript 애플리케이션의 번들러이다. SPA(Single Page Application) 환경에서 여러 모듈과 의존성을 하나의 최적화된 파일로 병합하며, 
다양한 리소스(이미지, 스타일, JavaScript)를 관리해 주어 빠르고 효율적인 프론트엔드 배포를 가능하게 한다.

옛날에는 페이지마다 새로운 html을 요청해서 뿌려주는 방식이였다면(SSR), 요새는 SPA이다 따라서, 하나의 html 페이지에 여러개의 자바스크립트 파일들이 포함한다.

웹팩은 자바스크립트 파일들을 모듈화해서 하나의 자바스크립트 파일로 번들링해준다.
(여러개의 스크립트 파일일 경우, 파일을 컴파일 할 때, 여러개 파일을 요청하고 로드하는데 시간이 오래 걸림)

### [특징/기능]
1. 모듈화:
  * 현대 웹 애플리케이션은 수많은 파일과 모듈로 구성되어 있다.. 웹팩은 이런 모듈들을 하나 또는 몇 개의 번들로 결합시켜, 모듈간의 의존성을 관리하며 웹 페이지 로드 시간을 줄일 수 있음

2. 최적화와 효율성:
  * 웹팩은 불필요한 코드를 제거하거나, 이미지를 압축하고, CSS와 JavaScript를 최적화하는 등의 작업을 자동으로 수행하여 최종적으로 배포되는 코드의 크기를 줄일 수 있음

3. 로더(Loaders)와 플러그인(Plugins):
  * 로더와 플러그인의 활용으로 다양한 형식의 파일(예: SASS, LESS, TypeScript)을 JavaScript로 변환하거나, 추가적인 최적화 작업을 실행할 수 있음

4. 개발 서버와 핫 모듈 교체:
  * 웹팩의 개발 서버는 실시간 리로드 기능을 제공하며, 핫 모듈 교체(Hot Module Replacement, HMR)를 통해 변경된 모듈만을 재로드하여 빠른 개발 피드백을 제공

5. 코드 분할(Code Splitting):
  * 큰 애플리케이션을 여러 작은 청크로 나누어, 필요할 때에만 로드하는 것이 가능합니다. 이를 통해 초기 로딩 시간을 단축시킬 수 있음

6. 환경 변수와 설정:
  * 개발, 테스트, 배포 등 다양한 환경에 따라 다른 설정이나 변수를 적용할 수 있게 도와줌

## 웹팩 주요속성 4가지

### 1.[entry]:
웹팩이 모듈을 번들링 하기위해 최초 진입점하는 자바스크립트 파일을 설정하는 부분(빌드를 할 대상 파일의 최초위치) 

```javascript
/ webpack.config.js
module.exports = {
  entry: "./src/index.js",
};
```

### 2.[output]:
웹팩이 "빌드"한 결과물의 "파일이름","저장경로"등 설정

```javascript
var path = require("path");

module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
};
```

### 3.[loader]:
로더는 웹팩이 자바스크립트 파일이 아닌 웹 자원(CSS, Images, 폰트 등)들을 모듈로 만들어주는 속성

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
```

#### 1. css-loader:
* CSS 파일을 JavaScript 모듈로 해석하고 번들링한다. 이 로더를 사용하면, JavaScript에서 import나 require 문을 통해 CSS를 로드할 수 있게 된다.

#### 2. style-loader:
* JavaScript로 변환된 CSS를 DOM에 삽입하기 위해 사용된다. 주로 css-loader와 함께 사용되며, css-loader로 해석된 CSS를 <style> 태그로 DOM에 추가한다.

#### 3. file-loader:
* 파일(예: 이미지, 폰트 등)을 처리하고 웹팩의 output 디렉토리에 해당 파일을 복사한다. 이로써 해당 파일에 대한 URL을 생성하게 되며, 최종 번들에 이 URL을 포함시켜 접근이 가능하게 한다.

#### 4. url-loader:
* file-loader와 유사한 작업을 수행하지만, 설정한 크기의 임계값을 기준으로 작은 파일을 Base64 인코딩하여 직접 JavaScript 번들에 포함시킬 수 있다. 이는 HTTP 요청 수를 줄이는 데 도움이 되지만, 큰 파일에 대해 사용할 경우 번들의 크기가 너무 커질 수 있으므로 주의가 필요하다.

#### 5. sass-loader:
* SASS/SCSS 파일을 웹팩이 처리할 수 있는 CSS로 변환한다. 이 로더는 node-sass 또는 dart-sass와 함께 작동하여, 웹팩 빌드 프로세스 중에 SASS 파일을 일반 CSS로 컴파일한다. 주로 css-loader와 style-loader와 체인으로 함께 사용되며, 개발자가 JavaScript에서 직접 SASS 스타일을 import할 수 있게 해준다.

#### 참고: https://webpack.js.org/loaders/

### 4.[plugin]:
웹팩에 "추가적인 기능"을 제공하는 속성 <br/>
로더는 파일을 빌드하는 과정에 관여하는 반면, 플러그인은 빌드된 결과물의 형태를 바꾸는 속성

```javascript
module.exports = {
  plugins: [new CleanWebpackPlugin()], //빌드 이전 결과물을 제거하는 플러그인
}
```

#### 1.BannerPlugin:
* 컴파일된 출력 파일의 맨 위에 배너 또는 헤더를 추가하는 데 사용된다. 이는 주로 라이선스나 프로젝트 정보와 같은 메타 정보를 포함시키기 위해 사용된다.

#### 2.DefinePlugin:
* 컴파일 시간에 전역 상수를 정의하는 데 사용된다. 이 플러그인을 사용하여 환경 변수 같은 값을 코드에 주입할 수 있다. 예를 들면, 개발 및 프로덕션 환경에 따라 다른 API 엔드포인트를 사용하고 싶을 때 유용하다.

#### 3.HtmlWebpackPlugin:
* HTML 파일을 생성하며, 웹팩으로 번들링된 JavaScript, CSS, 그 외 자원들을 자동으로 HTML에 포함시켜준다. SPA(Single Page Application)나 여러 페이지로 구성된 애플리케이션에서 유용하게 사용된다.

#### 4.CleanWebpackPlugin:
* 매번 웹팩을 실행할 때마다, 이전에 생성된 빌드 파일들을 자동으로 삭제하는 데 사용된다. 이로써 빌드 디렉토리가 오래된 또는 불필요한 파일로 인해 오염되는 것을 방지한다.

#### 5.MiniCssExtractPlugin:
* JavaScript에서 분리된 CSS를 별도의 파일로 추출하는 데 사용된다. 이렇게 함으로써, CSS를 비동기적으로 로드하거나 별도의 CSS 파일로 캐시하는 것이 가능해져 웹의 로딩 성능이 향상된다.

#### 참고: https://webpack.js.org/configuration/plugins/

## webpack-dev-server
webpack-dev-server는 웹팩으로 번들링된 웹 애플리케이션을 개발 환경에서 빠르고 효율적으로 테스트하고 미리보기 위한 간단한 웹 서버이다. 

```javascript
npm i -D webpack-dev-server // 설치 명령어 
```

```javascript
{
  "scripts": {
    "start": "webpack-dev-server" // 웹팩 개발서버 실행
  }
}
```

```javascript
//웹팩 데브서버 설정
devServer: {
  overlay: true, // 컴파일 중 에러나 경고가 발생하면 브라우저 화면에 오버레이를 통해 표시
  stats: "errors-only", // 통계 출력을 '오류만'으로 제한
  contentBase: path.join(__dirname, "dist"),  // 번들된 파일들을 제공할 경로
  publicPath: "/", // 번들된 자원을 제공할 경로 (웹 서버 기준)
  host: "dev.domain.com", // 개발 서버의 호스트명을 설정
  port: 8081, // 웹팩 서버 포트 번호
  historyApiFallback: true, // 404 응답 대신 index.html을 제공 (클라이언트 측 라우팅에 유용)
  // before: (app) => { // 개발 서버 실행 전 특정 라우트 설정 (예: mock API)
  //   app.get("/api/keywords", (req, res) => {
  //     res.json([
  //       { keyword: "이탈리아" },
  //       { keyword: "세프의요리" },
  //       { keyword: "제철" },
  //       { keyword: "홈파티" },
  //     ]);
  //   });
  // },
  before: (app) => { // `apiMocker` 라이브러리를 사용하여 mock API 설정
    app.use(apiMocker("/api", "mocks/api"));
  },
  proxy: {
    "/api": "http://localhost:8081", // "/api"로 시작하는 요청을 `http://localhost:8081`로 프록시
  },
}
```

위에 없는옵션들은 공식문서에서 천천히 읽고 설정해주면 된다. 

#### 참고: https://webpack.js.org/configuration/dev-server/

## 바벨(Babel)
Babel은 JavaScript 컴파일러로써, 최신 JavaScript(ES6 이상) 문법을 이전 버전의 JavaScript(ES5 등)로 변환해주는 도구이다. <br/>
이는 오래된 브라우저나 환경에서도 최신 JavaScript 코드를 호환성 있게 실행할 수 있도록 도와준다. Babel은 플러그인과 프리셋의 시스템을 사용하여 변환 과정을 매우 유연하게 구성할 수 있습니다.

### 프리셋
Babel의 프리셋은 특정 변환을 위한 여러 플러그인의 집합이다. 필요한 플러그인을 일일이 설정하는 일은 매우 난해한 일이기 때문이다.
즉 목적에 맞게 여러가지 플러그인을 세트로 모아놓은 것을 "프리셋"이라고 한다.Babel과 관련된 이러한 프리셋들은 바벨 설정 파일 (예: .babelrc 또는 babel.config.js)에서 presets 배열 안에 정의되어 사용된다.

### [자주쓰는 preset]:
#### 1. @babel/preset-env:
* ES2015 이후의 모든 버전의 JavaScript를 ES5로 변환해준니다. targets 옵션을 통해 특정 브라우저나 환경을 지정하면, 해당 환경에서 지원되는 기능은 변환하지 않고, 지원되지 않는 기능만 변환하는 스마트한 변환을 수행한다.

#### 2. @babel/preset-flow:
* 기능: preset-flow는 Flow 타입 주석을 제거하여 표준 JavaScript로 코드를 변환한다. Flow는 정적 타입 검사를 위한 JavaScript 확장이다.

#### 3. @babel/preset-react:
* React JSX 문법과 기타 React 관련 기능들을 변환하는 데 사용된다. JSX는 React 컴포넌트를 정의할 때 사용하는 XML과 유사한 문법이다.

#### 4. @babel/preset-typescript:
* TypeScript 코드를 표준 JavaScript로 변환한다. TypeScript는 정적 타입 검사를 제공하는 JavaScript의 확장이다. 이 프리셋을 사용하여 TypeScript의 타입 주석 및 기타 TypeScript 전용 문법을 제거한다.

```javascript
// babel.config.js:
module.exports = {
  presets: ["@babel/preset-env","@babel/preset-flow","@babel/preset-react","@babel/preset-typescript"],
}
```

#### 참고: https://babeljs.io/docs/presets

## ESLint
ESLint는 자바스크립트 코드에서 발견되는 문제점들을 식별해주는 정적 분석 도구이다. 코드의 포맷을 일관적으로 유지하고, 버그를 예방하며, 특정 스타일 가이드라인을 강제하기 위해 사용한다. ESLint 설정 파일은 프로젝트의 루트에 위치하며, 다양한 옵션을 통해 사용자가 규칙을 사용자 정의할 수 있게 해준다.
```javascript
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
```

#### 1.env:
  * 이 옵션은 코드가 실행될 환경을 정의한다. 여기서는 "browser"와 "es2021"이 설정되어 있어, 브라우저 환경과 ECMAScript 2021 버전의 최신 기능을 사용할 수 있다.

#### 2.extends:
  * 기본 ESLint 규칙 외에도 다른 규칙 세트를 확장하여 사용할 수 있다. 여기서는 "eslint:recommended"를 사용하여 ESLint에서 권장하는 기본 규칙 세트를 활성화하고 있다.

#### 3.overrides:
  * 특정 파일에 대해 다른 ESLint 규칙을 적용하려면 이 옵션을 사용한다.

#### 4.parserOptions:
  * 파서 옵션을 설정하여 JavaScript 버전(여기서는 "latest") 및 소스 유형(여기서는 "module")을 지정한다. 이렇게 하면 최신 ECMAScript 버전의 구문을 사용할 수 있고, 모듈 형식으로 코드를 작성할 수 있다.

#### 5.rules:
  * ESLint 규칙을 개별적으로 설정하거나 재정의하는 옵션이다. 

#### 참고: https://eslint.org/docs/latest/use/getting-started

## Prettier
Prettier는 코드 포매팅 도구로, 개발자들이 작성한 코드를 일관된 스타일로 자동으로 정리해주는 도구이다. 프로젝트에서 사용하는 여러 언어와 파일 형식을 지원하며, 팀원들 간의 코드 스타일 차이를 줄여 코드 리뷰 과정을 더 간결하고 효율적으로 만들어즌다. 설정 옵션을 통해 특정 코딩 스타일 가이드라인을 준수하도록 커스터마이징할 수 있다. Prettier의 설정은 보통 prettierrc 파일에 작성하는데, prettierrc 파일에는 Prettier가 코드를 어떻게 포맷해야 하는지에 대한 다양한 규칙과 설정이 들어있다. 간단한 Prettier의 설정파일을 살펴보면, 

```javascript
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true
}
```
* tabWidth: 한 탭의 공백 수를 정의. (예: "tabWidth": 2는 탭 한 개가 2개의 공백과 같은 폭을 가짐)
* semi: 세미콜론의 사용 여부를 정의. true로 설정하면 문장 끝에 세미콜론이 자동으로 추가
* singleQuote: 문자열을 작성할 때 단일 따옴표를 사용할지, 아니면 이중 따옴표를 사용할지 정의
* trailingComma: 객체 또는 배열의 마지막 항목 뒤에 쉼표를 추가할지 여부를 정의. 이렇게 하면 Git 차이점이 더 명확해지고, 요소를 추가하거나 제거할 때 실수할 가능성이 줄어듬
* bracketSpacing: 객체 리터럴에서 괄호 사이에 공백을 넣을지 여부를 결정


또는 eslintrc파일에서 추천 프리티어 플러그인 추가함으로써 간단하게 설정할 수 있다
```javascirpt
extends: ["eslint:recommended", "plugin:prettier/recommended"],
```

#### 참고: https://prettier.io/docs/en/options.html

## 최적화 플러그인

#### 1.CopyPlugin: 
* 이 플러그인은 웹팩 빌드 시 특정 파일이나 디렉토리를 다른 위치로 복사할 수 있게 돕는다. 여기서는 node_modules 디렉토리에 있는 axios.min.js 파일을 결과물 디렉토리(./dist)에 복사하는 역할을 한다.

#### 2.OptimizeCSSAssetsPlugin: 
* 이 플러그인은 CSS 자산을 최적화하며, CSS 파일 내의 불필요한 공백, 주석 등을 제거하여 파일 크기를 줄인다. 애플리케이션의 로딩 시간을 단축시키는데 기여한다.

#### 3.TerserPlugin: 
* 자바스크립트 코드를 난독화하고 불필요한 요소들(예: console.log 구문)을 제거하는 플러그인이다. 파일 크기를 줄이고 보안성을 높이는 데 도움이 된다.

#### 4.splitChunks: 
* 웹팩의 내장 최적화 기능으로, 코드 스플리팅을 통해 중복 코드를 제거하고, 결과물을 여러 파일로 분리할 수 있게 돕는다. 이렇게 하면 브라우저가 여러 파일을 동시에 다운로드할 수 있어 로딩 시간이 단축된다.

#### 5.externals: 
* 웹팩에서 특정 모듈을 무시하게 하는 설정이다. 여기서는 axios 라이브러리가 이미 빌드된 상태로 제공되므로, 빌드 프로세스에서 제외하여 번들 크기를 줄이고 빌드 시간을 단축시키는데 사용되고 있다.

```javascript
module.exports = {
  mode,
  entry: {
     ...
  },
  output: {
     ...
  },
  devServer: {
     ...
  },
  module: {
    rules: [
     ...
    ]
  },
  plugins: [
    ... 
    new CopyPlugin([
      {
        from: "./node_modules/axios/dist/axios.min.js", //axios는 이미 node_modules에 위치해 있기 때문에 이를 웹팩 아웃풋 폴더에 옮기고 index.html에서 로딩해야한다
        to: "./axios.min.js" // 목적지 파일에 들어간다
      }
    ])
  ],
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
```

## 폴더 구성
- src: 검색 어플리케이션 프론트엔드 소스
- server: 검색 어플리케이션 API 서버 코드 
- resource: 강의 진행에 필요한 자료. 이미지나 이론 실습용 코드
- react-sample: 마지막에 순서인 리액트 개발환경 구성을 위한 실습 코드

## 브랜치
- `1-webpack/1-entry`: 웹팩 엔트리/아웃풋 실습
- `1-webpack/2-loader`: 웹팩 로더 실습
- `1-webpack/3-plugin`: 웹팩 플러그인 실습
- `2-babel/1-babel`: 바벨 실습
- `2-babel/2-sass`: 사스 실습
- `3-lint/1-eslint`: 린트 실습
- `3-lint/2-prettier`: 프리티어 실습
- `4-webpack/1-dev-server`: 웹팩 개발 서버 실습
- `4-webpack/2-hot`: 웹팩 핫로딩 실습
- `4-webpack/3-optimazation`: 웹팩 최적화 실습
- `5-sample/1-react`: 리액트 샘플 실습
- `master`: 최종 결과물

## 참고
* https://webpack.kr/concepts/
* https://babeljs.io/docs/
* https://eslint.org/docs/latest/
* https://prettier.io/docs/en/
* https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html#1-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%97%90-nodejs%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0
