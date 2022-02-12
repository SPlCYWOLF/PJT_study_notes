## aws ec2 서버 생성 기초

<hr>
<br>

[참고](https://www.youtube.com/watch?v=i3nQMhQYlZg&t=1s)

### 인스턴스 생성 : AMI (amazon machine image) 생성

- 일단 OS는 우분투 16.04 가 설치된 가상머신을 선택
- 인스턴스 유형 선택 (필터링으로 목적에 맞는 spec을 선택 가능)
- 인스턴스 세부 정보 구성 (네트웍에 대한 옵션은 추후에 공부 필요)
  - 종료 방식 : OS 안에서 윈도우 종료 했을때, 인스턴스 자체를 중지할지 종료할지 선택 (일반적으로 중지)
- 스토리지 추가 (외장하드 느낌)
  - 종료 시 삭제 : 추가비용 발생 무서우면 일단 체크, 저장된 내용들을 인스턴ㅅ와 상관없이 영구적으로 사용하려면 체크 유지
- 태그 추가 (라잌 인스따그램)
  - 인스턴스 양이 많아질 수록 관리 목적으로 자세한 태그 정의가 중요!
  - 키값 `Name` 은 인스턴스의 이름 정의 할때 활용
- 보안 그룹 (새 보안그룹 ㄱㄱ!)
- 인스턴스 시작
  - 새 키 페어 생성 : ED25519 선택 ([RSA와 차이점 참고](https://naleejang.tistory.com/218#:~:text=%C2%A0-,RSA,-RSA%EB%8A%94%C2%A0%EA%B3%B5%EA%B0%9C%ED%82%A4))

<br>

<br>

## aws ec2 서버 접속 기초

<hr>

<br>

[참고](https://www.youtube.com/watch?v=lctfw9oQLrk&t=678s)

### 첫 접속

1. 접속 위한 SSH 프로그램 필요 (mobaXterm)

2. 받았던 `pem` 파일을 `ppk` 파일로 변환할 프로그램 필요 (puttygen)

   - 실행 후 `load private key` 로 `pem` 파일 받아와서 `save private key` 클릭하면 `ppk`파일 생성 완료

3. mobaXterm 실행해서 좌측 상단 세션 생성 후 SSH 로 가서 `remote host` 에 aws ec2에서 생성한 인스턴스의 public IP 를 입력

4. `specify username` 부분은 인스턴스의 AMI(amazon machine image) 마다 다름. 이번 예시인 ubuntu 같은 경우의 username은 `ubuntu`, 아마존 리눅스 같은 경우는 `ec2-user`, 이런 느낌.

   aws 매뉴얼에 자세한 username 들 참고 가능.

5. `Advanced SSH settings` 들어가서 `user private key` 에다 `ppk` 파일 입력 후 ok!

6. mobaXterm 클라이언트 프로그램을 사용해서,

   aws의 서울리전 데이터센터 안에 가상 머신을 생성했고,

   그 위에 우분투가 설치가 되었고,

   네트워크를 통해서 해당 우분투 환경에 원격 접속을 함



### 퍼블릭 IP

- 퍼블릭 ip는 마치 금과 석유. 한정된 자원

  전 세계에서 공용으로 사용하고, 갯수가 정해져 있음

  고로, aws 인스턴스를 중지 시키면 바로 퍼블릭 ip와 퍼블릭 DNS는 사라짐 (다른 사람에게 넘어감)



### 인스턴스 종료 이후 재 접속

1. mobaXterm 열려있는 새션 우클릭 => edit
2. 새로운 퍼블릭 ip 주소 입력 후 ok
3. 재 접속 완료

서비스를 만들게 되면 서비스의 도메인 주소를 사게 되고, 이를 ip와 매핑 하게 되는데, 이런 식으로 항상 퍼블릭ip 가 변경되면 너무 귀찮..

<u>고로</u> elastic ip 활용



### elastic IP

1. ec2 대쉬보드의 좌측 네트워크 보안 탭에서 탄력적 IP 클릭
2. 우측 상단의 `탄력적 IP 주소 할당` 클릭 하고 기본값으로 할당 클릭
3. 인스턴스를 탄력적IP와 연결 위해 원하는 탄력적 IP 주소 선택 후 우측 상단의 작업 버튼 클릭 => 탄력적 IP주소 연결 클릭
4. 원하는 인스턴스 선택 후 연결 클릭
5.  mobaXterm 돌아가서 세션 종료 후 세션 edit => 새로 할당 받은 탄력적IP 입력 후 ok!
6. 세션에 탄력적 IP 적용 완료!

