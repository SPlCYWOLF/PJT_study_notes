참고 : https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

### WebSocket 이란?

- 유저의 브라우저와 서버 간에 양방향 커뮤니케이션을 가능하게 만들어준 고마운 기술.

  - 서버와 클라이언트 간에 Socket Connection을 유지해서 언제든 양방향 통신 또는 데이터 전송이 가능하도록 하는 기술이다.

- WebSocket API를 활용하면,

  서버에 메세지를 보내고,  서버를 "poll" 하지 않고도 "event-driven" 응답을 받을 수 있음.



### WebSocket 활용 예시

- SNS어플리케이션
- 롤
- 구글 Doc
- 증권거래
- 화상채팅
- etc



참고 : https://duckdevelope.tistory.com/19

### Why WebSocket?

- <u>HTTP 통신 방식의 한계</u>

  => HTTP는 Request/response기반의 Stateless protocol.

  => 클라이언트 쪽에서 필요할때 Request를 할때만 서버가 Response를 하는 방식으로 통신.

  => 고로, 서버쪽 데이터가 업데이트 되더라도 클라이언트 쪽 화면은 Refresh하지 않는한 변경된 데이터 미반영.

  => ajax 활용해도 데이터의 충분히 빠른 업데이트는 불가능.

- <u>구세주 : WebSocket</u>

  => Web Socket은 Stateful protocol.

  => 한 번 연결이 되면 계속 같은 라인 사용. 고로, HTTP와 TCP연결 트래픽 제거.

  => 또한,  HTTP와 같은 포트(80)를 활용. 고로, 기업용 어플리케이션에 적용 시 방화벽의 재설정 불필요.

### How WebSocket work?

- 서버와 클라이언트 간의 첫 WebSocket 연결은 HTTP 프로토콜로 성사.

  WebSocket로 연결되면, WebSocket 독자의 프로토콜로 연결 상태 유지.

  HTTP 연결은 자동으로 cut.