// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // TODO: 프리티어 설정을 추가하세요.
  extends: ["eslint:recommended", "plugin:prettier/recommended"], //recommended -> ["eslint:recommended", "plugin:prettier/recommended"]
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};

// 여전히 ESLint를 사용해야 하는 이유는 남아 있다. 포맷팅은 프리티어에게 맡기더라도 코드 품질과 관련된 검사는 ESLint의 몫이기 때문이다.
// 따라서 이 둘을 같이 사용하는 것이 최선이다. 프리티어는 이러한 ESLint와 통합 방법을 제공한다.
// eslint-config-prettier 는 프리티어와 충돌하는 ESLint 규칙을 끄는 역할을 한다.
// eslint-plugin-prettier는 프리티어 규칙을 ESLint 규칙으로 추가하는 플러그인이다. 프리티어의 모든 규칙이 ESLint로 들어오기 때문에 ESLint만 실행하면 된다.

// npx prettier app.js --write: 프리티어 실행 명령어
// npx eslint app.js --fix: 린트 실행 명령어
