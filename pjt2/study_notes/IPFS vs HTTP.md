[참고1](https://discuss.ipfs.io/t/problem-with-ipfs/6997)   [참고2](https://www.youtube.com/watch?v=Obnxs_GC9Bk)   [참고3](https://podclips.com/c/WFWnZu)   [참고4](https://finance.yahoo.com/news/ipfs-filecoin-long-term-risks-144519436.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMnCZl5UMwVttGV-QAfbhX-g34TOffpHZX1Qxska23phdwFhOWzbrV_hB_sV-XE_GFd1F7J8wSVc39HlsLmXnUPNUVMiXBLhC1HD5nzqLCc26WJymhfmaraShXd9hJ8PrwGo7zvE2MhYpfJCvHfi5qF71mefOIB1jfGDU1ica79X)

<hr>

<br>

### What is IPFS?

- 탈 중앙화 파일 시스템

- 데이터를 저장하는 노드 네트워크

- 누구나 데이터를 호출 & 저장 할 수 있음

- 데이터가 저장되어있는 위치의 주소를 통해서가 아닌,

  데이터 자체에 고유 해시값을 부여해서 데이터 자체를 호출하게 됨

- IPFS 자체는 BlockChain 아님

  하지만 여러 노드에서 데이터의 호스팅에 대한 incentive로서 FIL coin 이라는 암호화폐가 활용됨.

<br>

### IPFS vs HTTP

- 데이터 호출 및 저장의 로직 차이 :

  HTTP : 

  - 하나의 서버에서 하나의 파일을 다운로드

  IPFS :

  - 여러 여러 노드로부터 동시에 파일 조각들을 다운로드 => 하나의 파일

<br>

### IPFS 장점

- 최대 60% bandwidth 절약
- 이론상 데이터의 장기적 보존성 up, 하지만 논쟁의 여지가 있음 (단점 참고1)
- 데이터에 대한 신뢰도 up (데이터 불변)

### IPFS 단점   [참고](https://finance.yahoo.com/news/ipfs-filecoin-long-term-risks-144519436.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMnCZl5UMwVttGV-QAfbhX-g34TOffpHZX1Qxska23phdwFhOWzbrV_hB_sV-XE_GFd1F7J8wSVc39HlsLmXnUPNUVMiXBLhC1HD5nzqLCc26WJymhfmaraShXd9hJ8PrwGo7zvE2MhYpfJCvHfi5qF71mefOIB1jfGDU1ica79X)

- 데이터의 유효성 보장 안됨 (데이터를 호스팅 해주는 IPFS 노드가 없으면 데이터 굿바이)
- etc

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

결론 : IPFS 좋다는 자료 & 별로 메리트가 없다는 자료가 서로 많아서 헷갈림;