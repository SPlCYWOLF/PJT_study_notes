[참고1](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/)   [참고2](https://www.youtube.com/watch?v=WPdJaBFquNc&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=11)   [참고3](https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/)

<hr>

<br>

선택지 : getStaticProps, getServerProps, getStaticPaths, Incremental Static Regeneration

현재 구현하는 상품 상세정보 페이지 조건사항들:

- 펀딩 상품이므로 SEO 최적화 필요
- 상품의 상세 페이지들도 html로 생성되어야함(static하게 build되어야함)
- 선택지가 SSR와 SSG로 나뉜다 어떤게 좋을까?
- 자주 바뀔것 같진 않다만 그래도 때때로 바뀌는게 자연스럽지 않을까
- 서버에 요청을 너무 많이 넣어서 트래픽량을 올리는것도 피하고 싶다
- 빠릇빠릇함을 중요시 한다면 getStaticPaths 가 좋을듯함
- 실시간성을 중요시 한다면 getServerSideProps 가 좋을듯함
- 다이나믹 루트 활용하고 정적인 상세페이지임으로 getStaticPaths 를 선택
- 어느정도 실시간성을 부여하기 위해서 Incremental Static Regeneration도 좋지 않을까?
- 하지만 ISR은 `atomic` and `immutable` 배포의 구조를 허문다.
  고로, 예를 들어서 유저가 예상치 못한 예전 버전의 캐시된 페이지로 라우팅 될 수 있고, 이를 디버깅 하기도 매우 까다롭다.
  이유는 개발자와 문제를 겪고있는 사용자가 같은 버전의 캐시된 페이지를 바라보고 있지 않을 수 있기 떄문.

최종 선택:

- 미정

