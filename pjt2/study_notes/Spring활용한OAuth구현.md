## Spring Security 를 활용한 OAuth 구현과 통상적인 Spring 활용한 OAuth 구현의 비교글 입니다!

<br>

> 대성님의 멱살캐리 너무 좋았구요, Spring 을 활용한 두가지 OAuth 구현 과정에 대한 process를 간략하게 정리해봤습니다!

------

<br>

### 🙉 일반 OAuth 로그인 과정:

- [과정] 프론트에서 로그인 진행 → 인가코드 던져줌 → 프론트에서 백으로 전달 → 백에서 인가코드 + 클라이언트ID 를 리소스 서버(kakao, naver, etc)에 전송 → access token 백으로 전달 → 백에서 access token + 클라이언트 secret 으로 다시 resource server에 전송 → 인증되면 사용자 정보 백으로 전달 → (회원가입일 경우 해당 정보 DB저장) → 서버에서 customize 된 사용자 정보를 프론트로 전달

<br>

### 💗 Spring Security 를 이용한 OAuth2.0

- [과정] 프론트에서 로그인 진행 → 인증되면 사용자 정보 백으로 전달 → (회원가입일 경우 해당 정보 DB저장) → 서버에서 customize 된 사용자 정보를 브라우저로 전달
- [생략된 과정] 인가코드 던져줌 → 프론트에서 백으로 전달 → 백에서 인가코드 + 클라이언트ID 를 리소스 서버(kakao, naver, etc)에 전송 → access token 백으로 전달 → 백에서 access token + 클라이언트 secret 으로 다시 resource server에 전송 →

------

<br>

### 😋 Spring Security 장점 (추론입니다 ):

- 구글&FB 기본 지원, 구현 매우 쉬움
- 위 프로세스 전부 처리해줌, 고로 개발자 frinedly & 아마 속도 개선 => UX 향상
- human error & 예외처리 & 개발 속도 & UX better



### 참고

- 네이버는 미구현..