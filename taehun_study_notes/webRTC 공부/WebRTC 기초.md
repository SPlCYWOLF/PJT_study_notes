### Web RTC vs Web Socket

참고 : https://www.youtube.com/watch?v=5EhsjtBE7I4&t=317s

- Web Socket은 **브라우저와 서버간**에 stateful connection.
  - 장점: 클라이언트의 브라우저에 적은 부담
  - 단점: 유저가 많을수록 서버에 부담 => 강한 메모리 파워 필요 => 돈 많이 듬
- Web RTC는 **브라우저와 브라우저 간**에 stateful connection.
  - 장점: 유저 수가 적으면 서버보다 빠름, 서버에 적은 부담.
  - 단점: 유저가 많을수록 클라이언트의 브라우저에 부담 => 처리 시간 up => UX down



### Web RTC 서버의 종류

참고 : https://surprisecomputer.tistory.com/8?category=909008

<img src="https://blog.kakaocdn.net/dn/cgwqd2/btqTPx4qe3L/KhxJmMTD8hP61Vap7LXRQk/img.webp" alt="img" style="zoom:80%;" />

1. Signaling 서버 (P2P / Mesh)

   uplink : N개, downlink: N개

   장점: 서버 자원 최소화, P2P => 빠른 속도 => 실시간성 보장

   단점: 1:N or N:M 연결에서 클라이언트 부하 급상승 => 느린 속도 => UX down

2. SFU (selective forwarding unit)

   uplink : 1개, downlink: N개

   종단 간 미디어 트래픽을 중계하는 중앙 서버 방식

   장점: P2P 대비 클라이언트 부하 down

   단점: P2P 대바 속도 down, 서버 비용 up, 대규모 N:M 연결에서는 클라이언트가 많은 부하 감당

3. MCU (multi-point control unit)

   uplink : 1개, downlink: 1개

   다수의 송출 미디어를 중앙 서버에서 하나로 가공 or 혼합 해서 유저들에게 전달

   장점: 클라이언트 부하 최소화, 위 두개 서버종류 대비 N:M 구조에 적합

   단점: 중앙 서버의 높은 컴퓨팅 파워 요구 => 돈 많이 듬, 높은 작업 비용 => 실시간성 & UX down

   