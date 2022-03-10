[참조 1:30:30 언저리](https://www.youtube.com/watch?v=0BCpOOpdiX0&t=15743s)

<hr>

프롤로그: 

펀딩 상품이다보니, 아무래도 인터넷 환경에 노출되는 구조를 가져야한다 생각해서 SEO 최적화 되도록 코드짜는법이 궁금했습니다.

이후, Javascript 가 지원되는 검색 봇들은 브라우저상에서 render 된 내용들을 바탕으로 검색하기도 하지만, 그렇지 않은 검색 봇들까지 감안한다면 SSR이 이상적이라는걸 알게되었습니다.

하지만, SSR은 UX에 최악이라는 소문을 들어서 이에 대한 개선 방법이 없나 알아보았습니다.

<br>

### cliend-side data fetching  vs Server-side data fetching

- 클라이언트에서 fetch vs 서버사이드에서 fetch
  고로
  페이지 마운트 이후 fetch vs 페이지 마운트 전에 fetch
  고로 브라우저상에 fetch 정보 표시될 때 까지 :
  페이지 render 2번 vs 페이지 render 1번
- 불러오는 데이터가 큰 경우 :
  일단 브라우저상에 보여지고 fetch 되면 내용 추가 vs 화면 얼어붙었다가 완성된 화면 보여줌
- 서버에 부담 적음 vs SEO에 좋음

```react
// useEffect 
useEffect(() => {
    axios.get('/api/example');
    .then(response => setExample(response.data));
    .catch(console.error)
})

// server-side props
export async function getServerSideProps(context) {
    const response = await axios.get('http://localhost:3000/api/example');
    return {
        props: {
            example: response.data,
        },
    }
}
```

<br>

### SSR fetching 의 단점 보완 방안

- 데이터 캐싱으로 해결 : SWR (오픈소스 라이브러리) 활용

  `axios` 를 `fetcher` 라는 형태로 감싸서 SWR의 형태로 활용.

  1. 처음 fetch 해왔던 데이터를 재사용 해서 화면에 표시
  2. 서버에 fetch 요청을 보냄
  3. 결과 response 받으면 화면에 업데이트

  사용자 입장에선 최초 1회 render 만 기다리면 되고, 이후에는 화면전환 해도 fetch data 다 보임
  => UX 업

  ```react
  // 예시 활용법
  import useSWR from 'swr'
  
  const fetcher = (url) => {
      return axios.get(url).then(response => response.data);
  }
  
  const {data, error} = useSWR('http://localhost:3000/api/example', fetcher);
  ```

<hr>

<br>

### 결론

- SWR 찍먹 해보실래요?



