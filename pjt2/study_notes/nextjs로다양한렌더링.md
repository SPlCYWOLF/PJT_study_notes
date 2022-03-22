[참고1](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/)   [참고2](https://www.youtube.com/watch?v=WPdJaBFquNc&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=11)   [참고3](https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/)

------

<br>

### 🏹 펀딩 상세 페이지 렌더 선택지

1. getStaticProps
2. getServerProps
3. getStaticPaths
4. Incremental Static Regeneration,

<br>

### 💳 최적의 선택지를 찾아 해매는 태훈’s 의식의흐름:

- 펀딩 상품이므로 SEO 최적화 필요, 고로 상품의 상세 페이지들도 html로 생성되어야함(static하게 build되어야함)
- 선택지가 SSR(getServerProps)와 SSG(getStaticPaths or getStaticProps)로 나뉨.
- 페이지 컨텐츠가 자주 바뀔것 같진 않다만 그래도 최신화 해줘야하지 않을까
- 빠릇빠릇함을 중요시 한다면 SSG이 정석
- 실시간성을 중요시 한다면 SSR이 정석
- 서버에 요청을 너무 많이 넣어서 트래픽량을 올리는것도 피하고 싶다. SSR은 부담이 커지겠지?
- 그러면 일단 SSG쪽으로 선택.
- 다이나믹 루트 활용하여 각 상세 페이지에 대해 라우트와 html 페이지를 생성해주어야 하니까 getStaticPaths 선택.
- 잠깐, 어느정도 실시간성을 부여하기 위해서 Incremental Static Regeneration도 좋지 않을까?
- 하지만 ISR은 `atomic` and `immutable` 배포의 구조를 허문다.   [참조](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/)

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aece2f9f-5555-43b5-b050-7eff7e42990b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220322T145021Z&X-Amz-Expires=86400&X-Amz-Signature=97b1f2018ea10d5b8b627627ba7dcc8a988b3969529327f8db5143cb6e9e9ca2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">

### atomic & immutable 배포 모델

1. 캐시된 버전 관리에 유리
2. 고로 디버깅도 수월하다
3. hybrid rendering (ISR) 활용 못함 ⇒ 낮은 UX고점 but 안전

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a2bf776a-14ce-40b9-958a-0f1e651aa4cb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220322T145052Z&X-Amz-Expires=86400&X-Amz-Signature=2ed4eaf7d17f321b8e1e61db8a1ecb05c571c306ceaa9f2a485f4f72d6db35b8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">

###  반대 모델

1. 유저가 예상치 못하게 캐시된 예전 버전 데이터의 페이지로 라우팅 될 수 있음 (어떻게 이렇게 될 수가 있는건지는..💦)
2. 이를 디버깅 하기도 매우 까다로움 why? 개발자와 문제를 겪고있는 사용자가 같은 버전의 캐시된 페이지를 바라보고 있지 않을 수 있기 떄문.
3. hybrid rendering (ISR) 활용 가능 ⇒ 높은 UX고점 but 리스키

- 하지만 Vercel (next.js 공식 프론트 배포 플랫폼 ) 의 입장에서는 ISR 사용시 위의 문제는 언급조차 안함,, 고로 ISR을 사용해도 되는게 아닐까 싶기도 하고..

------

<br>

### 🕵️ 최종결정

- 특정 펀드 상품의 기본정보들  ⇒ getStaticPaths
- 특정 펀드 상품의 상세정보들 ⇒ getStaticPaths
- 특정 펀드 상품의 선물 선택지들 ⇒ getStaticPaths

- **특정 펀드 상품의 QnA & 공지사항 ⇒ Optimistic response 구현**  [출처](https://www.youtube.com/watch?v=b7Uqx7NZpHw)

  - optimistic response : 느린 response를 유저가 빠르게 느끼게 구현

  - SWR 라이브러리가 제공하는 `mutate` 함수를 활용 ⇒ 로컬상의 캐시를 update할때 활용함

  - 로직:
    1. 작성글 post 요청 보냄
       1. post요청에 대한 response를 기다리기 전에 `mutate` 함수 활용하여 로컬 캐시 업데이트
