### 목차

[TOC]

<hr>

<br>

<br>

### webRTC 연결 전체적 흐름

1. SDP 를 교환 (피어 간의 네트워크 정보 공유)
2. peer들은 ICE candidate를 교환 (발신 피어 입장에서 상대 피어와 통신 가능한 방법 후보자들 뽑아서 보내라고함)
   1. 피어간 TURN 서버와 STUN 서버를 교환
   2. 서로 가능한 STUN서버와 TURN서버 정보를 교환
   3. peer 간에 사용해 통신할 최적의 후보자 선별
3. webRTC 연결 완료(?)

<hr>

<br>

### STUN server

- Session Traversal Utilities for NAT

- 공용 인터넷 망에 위치,

  라우터의 NAT 뒤에 있는 peer가 공인 ip 주소를 요청할 때,

  해당 주소를 확인하고 접근 가능한 ip port 정보를 알려주는 역할

  - NAT 클라이언트가 STUN 서버로 요청 보냄 => 자신의 public IP 를 응답 받음.

    고로, NAT 환경에서도 P2P 통신을 가능케 함

- 대부분이 STUN 이용하여 연결 성공적으로 함

> 요약: 외부 네트워크 주소를 얻는데 사용됨

<br>

### NAT

- Network Address Translation
- 외부 네트웍에 알려진 것과 다른 IP 주소를 사용하는 내부 내트웍에서 IP 조수를 변환하는 프로세스
- 주소 변환 기능은 라우터나 방화벽에 설치됨
- NAT 환경에서는 private IP 를 별도로 가지기 때문에 P2P 통신 불가.
- 종류 2가지
  1. static NAT
  2. dynamic NAT

<br>

### TURN server

- Traversal Using Relays around NAT
- STUN 서버의 개념을 포함한 Super set
- peer들간의 미디어 스트리밍을 릴레이하기 위해 사용함
- 서로 공용주소 가짐 

> P2P 연결 실패하면, 트래픽 중계하는데 활용됨

<br>

### SDP

- Session Description Protocol

- 멀티 미디어 세션 파라미터를 협상하는 프로토콜.

  미디어에 대한 meta data로,

  1. 사용할 수 있는 코덱
  2. 사용되는 프로토콜
  3. bit rate
  4. bandwidth 등

  서로간의 네트워크 정보를 공유하는 프로토콜.

<br>

### ICE

- interactive connectivity establishment
- client 가 모든 통신 가능한(필수적인) 주소를 식별하는 프로세스.
  결과적으로 STUN 메세지를 TURN 서버로 요청 및 응답함.

