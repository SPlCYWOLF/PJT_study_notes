### AWS EC2 접속하기

- 추천 GUI 툴 : MobaXterm
  - MobaXterm에 받은 개인키/공개키(.pem/.ppk)로 접속하면 서버 내 디렉토리, 파일 등을 GUI식으로 확인할 수 있어서 편한 쉘 접속 프로그램
- AWS EC2 에서 nginx 설치 & MySQL 설치 (Workbench도 포함!)

<br>

### Nginx 기본 설정

1. FE/BE build 파일 위치 설정
2. Https 설정 (SSL, request)
3. Proxy 설정

<br>

### MobaXterm

- session => SSH settings => SSH 탭 내에 배포받은 .pem 키를 선택 => 서버 접속 완료
- 기본 계정 이름은 `root` 쓰지 마라..!

<br>

### 배포하기

- mobaXterm에 nginx 기본 설정 후 원하는 FE/BE 파일을 배포.

- 리눅스 명령어를 알아두면 좋은데, **vi(파일 편집 명령어), sudo(관리자 권한)** 등 활용 가능

- vi로 nginx default 창 내의 기본 디렉토리 등을 적당히 조절해주면 good.

  해당 명령어는 `sudo vi /etc/nginx/sites-available/default`

- 드래그 앤 드랍으로 배포 파일을 쉽게 서버에 설치 가능.

<br>

### 배포 명령어 정리

- `ps-ef | grep <jar-name>.jar` => 현재 jar의 PID 확인
- `kill -9 <PID>` => PID 종료
- `sudo service nginx restart` => Nginx 재시작 
- `nohup java -jar <jar-name>.jar &` => 백그라운드 실행 명령어

<br>

### DB 공유하기

- Hostname에 서버 이름을 적어두고, **root 계정 외 다른 계정으로 설정 후** DB에 접속.
- 주의: **포트 번호 잘 열어뒀는지 확인**
