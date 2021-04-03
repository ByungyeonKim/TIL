# PostCSS

## CSS 전처리기?

- 전처리기만의 고유한 문법을 통해 작성을 하면 순수 CSS로 변환을 해주는 프로그램이다.
- 순수 CSS에서 지원하지 않는 특징이 추가된다.
  - 믹스인(mixin), 중첩 셀렉터(nesting selector), 상속 셀렉터(inheritance selector) 기타 등등
- 이러한 문법은 가독성을 좋게하고 유지보수가 쉬워진다.
- 대표적인 전처리기 프로그램은 다음과 같다.
  - [PostCSS](https://postcss.org/)
  - [Stylus](https://stylus-lang.com/)
  - [SASS](https://sass-lang.com/)
  - [LESS](http://lesscss.org/)

## 근데 그중에 왜 PostCSS를 쓸까?

- SASS나 LESS같은 경우 주어진 문법과 특징에 한정 되어 있는 반면에 PostCSS는 다양한 플러그인이 존재한다. [PostCSS Plugins](https://github.com/postcss/postcss/blob/main/docs/plugins.md)
- 리액트 개발자들이 주로 사용하는 라이브러리를 모아놓은 create-react-app에 기본으로 탑재 되어 있다. 그만큼 선호도가 높고 실제로 인기도 많다.
- PostCSS의 autoprefixer가 브라우저의 호환성 문제를 자동으로 해결해준다.
  > Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you. - PostCSS
  - autoprefixer가 현재의 브라우저 점유율과 인기도를 바탕으로 정보를 수집해서 브라우저 호환성을 해결해 준다는 것에 신뢰가 간다.

```CSS
/* input */
:fullscreen {
}

/* output */
:-webkit-full-screen {
}
:-ms-fullscreen {
}
:fullscreen {
}
```

- CSS 모듈화를 지원한다.

  - BEM같은 클래스 작명법을 사용하지 않아도 관리가 수월하다.

- 여러 프로젝트를 하면서 CSS 코드의 양이 많아짐에 따라 가독성이 안좋아지고 주석을 많이 달게 되며 cmd+f로 코드를 찾고 있는 나 자신을 보았다. CSS 공부는 재미있었지만 가끔 똑같은 스타일에 브라우저마다 다른 코드를 써야한다는 것이 여간 귀찮은게 아니었다. PostCSS 개발 도구를 사용함으로써 이런 것들이 해소되길 기대하고 있다.
