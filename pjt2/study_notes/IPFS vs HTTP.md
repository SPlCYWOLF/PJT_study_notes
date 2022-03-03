[참고1](https://discuss.ipfs.io/t/problem-with-ipfs/6997)   [참고2](https://www.youtube.com/watch?v=Obnxs_GC9Bk)   [참고3](https://podclips.com/c/WFWnZu)   [참고4](https://finance.yahoo.com/news/ipfs-filecoin-long-term-risks-144519436.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMnCZl5UMwVttGV-QAfbhX-g34TOffpHZX1Qxska23phdwFhOWzbrV_hB_sV-XE_GFd1F7J8wSVc39HlsLmXnUPNUVMiXBLhC1HD5nzqLCc26WJymhfmaraShXd9hJ8PrwGo7zvE2MhYpfJCvHfi5qF71mefOIB1jfGDU1ica79X)   [참고5](https://www.youtube.com/watch?v=0iE_vKzTudM)   [참고6](https://www.youtube.com/watch?v=k1EQC7tdh70)   [참고7](https://happycryptoschool.org/003-ipfs/)   [참고8](https://www.geeksforgeeks.org/difference-between-http-and-ipfs/)

<hr>
### IPFS 를 공부한 이유

- 블록체인의 어필 포인트는 탈 중앙화.

  하지만 블록체인 자체가 중앙화된 저장 시스템 안에 포함된거라면 의미가 있는걸까? 하는 궁금증

  <img src="IPFS vs HTTP.assets/image-20220227000751656.png" alt="image-20220227000751656" style="zoom:80%;" />

<br>

### What is IPFS?

- 탈 중앙화 파일 시스템

- 데이터를 저장하는 노드 네트워크

- 누구나 데이터를 호출 & 저장 할 수 있음

- 데이터가 저장되어있는 위치의 주소를 통해서가 아닌,

  데이터 자체에 고유 해시값을 부여해서 데이터 자체를 호출하게 됨.

  다르게 말하자면, IPFS 망 내에서 데이터 저장 방식은 Git 의 버전 컨트롤 방식과 유사함 (데이터 = 콘텐츠).

- IPFS 자체는 BlockChain이 아님.

  하지만, 여러 노드에서 데이터의 호스팅에 대한 incentive로서 Filecoin 이라는 블록체인 기반 암호화폐가 활용됨.

<br>

### IPFS vs HTTP

- 데이터 호출 및 저장의 로직 차이 :

  HTTP : 

  - 하나의 서버에서 하나의 파일을 다운로드
  - client --- server 형식
  - 서버 다운 시 데이터 접근 불가
  - 데이터를 public하게 배포하기 위해선 서버 호스팅 지출 발생
  - 대부분 부라우저는 HTTP 호환해줌
  
  IPFS :
  
  - 여러 여러 노드로부터 동시에 파일 조각들을 다운로드 => 하나의 파일
  - 탈 중앙 P2P 형식
  - 데이터 조각을 호스팅 하는 노드가 존재하면 항시 데이터 접근 가능
  - 데이터의 유효성을 보장하기 위해선 노드 호스팅 지출 발생
  - 현시점 Brave 브라우저만 호환해줌

<br>

### IPFS 장점

- 최대 60% bandwidth 절약 (참고6)
- 이론상 데이터의 장기적 보존성 up, 하지만 논쟁의 여지가 있음 (단점 참고4)
- 데이터에 대한 신뢰도 up (특정 데이터를 보관하는 저장소를 통해 데이터 전달이 아닌, 특정 데이터 자체를 바로 전달, 고로 원하지 않는 데이터를 받을 수 없는 구조) (참고5)

### IPFS 단점   [참고](https://finance.yahoo.com/news/ipfs-filecoin-long-term-risks-144519436.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMnCZl5UMwVttGV-QAfbhX-g34TOffpHZX1Qxska23phdwFhOWzbrV_hB_sV-XE_GFd1F7J8wSVc39HlsLmXnUPNUVMiXBLhC1HD5nzqLCc26WJymhfmaraShXd9hJ8PrwGo7zvE2MhYpfJCvHfi5qF71mefOIB1jfGDU1ica79X)

- 데이터의 유효성 보장 안됨 (데이터를 호스팅 해주는 IPFS 노드가 없으면 데이터 굿바이) (참고4)
- IPFS 는 Filecoin 을 통해 노드 호스팅이 됨. 고로, IPFS는 Filecoin 에 의존성이 강함 ⇒ 이것이 “탈 중앙화?”

<br>

### 데이터 유효성 문제 해결 위한 노력

- 데이터의 유효성을 확보하기 위한 3가지 방법 :

  1. 본인의 노드 구축 및 데이터 호스팅.

     but.. 장기적 데이터의 유효성 보장은 불확실

  2. 비용을 지불하여 node opereator 에게 데이터 호스팅 부탁 (pinning)

     but.. 결국 중앙화 파일 시스템과 비슷

  3. pinning 을 관리해주는 API 활용 (대표적으로 Web3 Storage)

     but.. 결국 중앙화 파일 시스템과 비슷 (API 서비스가 중단되면 대혼란?)

<br>

결론 : 

1. IPFS 좋다는 자료 & 별로 메리트가 없다는 자료가 서로 많아서 헷갈림;
2. “데이터의 탈 중앙화” + “데이터의 유효성 보장” 은 결국 그림의 떡인건가..
3. IPFS는 [완벽x]   [최선o(?)]
4. Filecoin과 이더리움의 차이는 또 뭐지?