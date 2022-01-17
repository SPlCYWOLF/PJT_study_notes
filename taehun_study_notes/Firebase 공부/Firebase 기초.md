## What is Firebase?

- real-time database
  - database
  - association
  - cloud messaging
  - storage
  - hosting
- back-end code 들
- 위 모든걸 앱 & 웹 출시 후 관리 가능한 플랫폼



### Firebase 인증기능

- 여러 제공업체: 이메일 / PW, 이메일 링크, 전화 인증, google, facebook, twitter, github 로그인에 사용되는 로그인 흐름 제공.
- 계정 연결: 여러 ID 공급업체에서 사용자 계정 안전하게 연결하는 흐름 제공 (OAuth?)
- 맞춤 설정: 앱의 요구사항에 맞게 FirebaseUI 의 CSS 스타일 재정의 가능. 혹은, 오픈 소스 프로젝트 적용도 가능.
- 간편 가입 및 자동 로그인: 신속한 교차 기기 로그인을 위해 간편 가입과 자동 통합.
- 현지화된 UI: 40개 이상 언어로 국제화.
- 익명 사용자 업그레이드: 로그인 / 가입 통해 익명 사용자를 업그레이드 가능. (검색必)



### Firebase 상세 기능

- key value 기반의 DB

  고로, RDB가 가진 단점을 어느정도 극복 가능.

- 실시간 데이터 동기화를 지원.

  클라이언트에서 접속 가능한 2가지 클라우드 기반 DB 솔루션 제공.

  1. Cloud Firestore:

     모바일 앱 개발을 위한 Firebase의 최신 DB.

     실시간 DB를 바탕으로한 직관적인 데이터 모델이다.

     또한, 실시간 DB보다 풍부하고 빠른 쿼리와 원활한 확장성 제공

  2. 실시간 DB:

     Firebase의 기존 DB.

     여러 클라이언트에서 실시간으로 상태를 동기화해야 하는 모바일 앱을 위한 효율적이고 지연 시간이 짧은 솔루션.

- 위의 둘 중, 최신 버전인 cloud Firestore 를 우선적으로 활용해보는걸 추천.



### RDB vs Firebase DB

- 매우 복잡한 관계를 가진 DB일경우 RDB가 적합.
- Firebase DB는 그래프형 DB는 없다.

