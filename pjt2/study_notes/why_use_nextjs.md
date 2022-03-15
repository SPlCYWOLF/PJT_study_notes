[참고1](https://www.youtube.com/watch?v=rtgbaKBhdkk)   [참고2](https://www.youtube.com/watch?v=6jWWKczzGM0)   [참고3 ](https://www.youtube.com/watch?v=f1rF9YKm1Ms&t=563s)  [참고4](https://www.youtube.com/watch?v=JW2c-y-MdiA)

<hr>

## 왜 next js 를 써야하는가?

<br>

1. react 입문자에게 매우 적합.

   - react 는 매우 자유도가 높음 => 초심자가 사용하기에는 좋은 선택지와 나쁜선택지 분간이 잘 안감 => next js 프레임 워크를 도입해서 최선의 방향성을 쉽게 확립 => 개발 속도 up

2. SSR과 CSR 를 간편하게 동시 구현 가능 => SEO 최적화에 적합

   - 펀딩이 성공해서 돈 벌고 싶어함 => 검색에 노출되어야만 사람들의 유입 증가시킴 => SEO 최적화 필수
   - 바닐라 리액트 => SSR 기능 없음

3. 파일 시스템 based 라우팅

   - `page` 디렉토리에 JS 파일 생성 == 새로운 웹 페이지 생성 + 라우팅 설정 완료
   - 파일명 설정 만으로도 : `[example].js` => url 통해 dynamic 하게 페이지 라우팅 가능

4. 디버깅 경험 개선

   - error 시에 모달창 떠서 자세한 에러 내용 알려줌

5. built-in Prerendering 기능

   - 함수형 컴포넌트를 기준으로, pre-rendering 이 기본적으로 적용됨

   - prerendering : 서버측에서 "미리" static html 페이지를 생성해서 브라우저로 보내줌

     - 2가지 종류의 pre-rendering :

       1. Static Generation :

          - 빌드 시 서버측에서  static HTML 생성 => 요청 들어오면 그대로 브라우저에 뿌려줌
          - 요청마다 재사용됨 => 빠릇빠릇하게 페이지 보여짐 => UX good!

       2. SSR :

          - 요청이 들어오면 서버에서 HTML 생성

          - 요청 마다 서버에서 새롭게 HTML 생성 후 브라우저로 보냄 => 빠릇빠릇하진 않음.. 

            => 해결책 : [nextjs팁1](nextjs팁1.md) 참고

6. 다양한 built-in 최적화 기능들

   - 이미지 최적화

   - Fast Refresh => 로컬에서 개발할때 rebuild 과정이 매우 빨라져서 DX up!

   - built-in support for CSS, SASS, etc

   - code splitting & bundling

     => 특정 페이지 라우팅 시, 오직 특정 페이지에 필요한 JS 파일만을 render => render 시간 단축 => 다른 페이지에서 error 가 생기더라도 `code splitting` 되어있기 때문에 영향 안 받음 => UX up!

7. 매우 빠르게 성장중인 next js 인지도 & 커뮤니티