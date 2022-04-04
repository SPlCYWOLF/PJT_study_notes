## React Suspense 공부

<hr>

<br>

## 🍎 React Suspense

1. ### CSR : Data fetching via compatible libraries (ex. Relay)

   - ex.

     ```jsx
     // 데이터를 fetch(가져오는) 컴포넌트
     function Profile() {
         const [profile, setProfile] = useState();
     
         useEffect(() => {
             fetch("/api/profile")
                 .then((response) => response.json())
                 .then(setProfile);
         }, []);
     
         if (!profile) {
             return <Loader />;
         }
     
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     ```

     react query 또는 SWR 과 같은 라이브러리로 위의 코드 개선 가능 ↓

     ```jsx
     function Profile() {
         const { data: profile, isLoading } = useQuery("profile", fn);
         if (isLoading) {
             return <Loader />;
         }
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     ```

     하지만, React Suspense 활용으로 아래와 같이 더욱 깔끔하게 작성 가능!

     ```jsx
     // profile.js
     function Profile() {
         const { data: profile } = useQuery("profile", fn);
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     
     // App.js
     <Suspense fallback={<Loader />}>
         <Profile />
     </Suspense>
     
     // loading state(<Loader>)를 아예 컴포넌트 밖에서 관리하기 때문에 코드가 훨씬 직관적!
     ```

     - 리액트18의 fetching library 에서 자동으로

       컴포넌트의 data fetching 이 완료 되기 전까지는

       `Suspense` 안에 정의한 `Loader` 컴포넌트를 사용자에게 보여줌!

       data fetching 완료되면 해당 컴포넌트로 자동 전환!

       <br>

2. ### SSR : Streaming server rendering (not only 위의 기능을 SSR 으로도 구현 가능.. but better!)

   - SSR 의 문제점!

     - 아래와 같은 경우,

       유저는 `Nono` 컴포넌트의 렌더링이 끝나기 전에는 `Yesyes` 컴포넌트를 못봄.

       ```jsx
       <App>
           <Yesyes />
           <Nono />
       </App>
       // Nono는 매우매우 heavy해서 렌더링이 10분 걸리는 컴포넌트라는 가정.
       // 고로, 유저는 CSR 와 같이 빈 화면만 보게되겠지..
       ```

   - ## `Suspense` 로 위와 같은 문제 해결

     ```
       ```jsx
       <App> 
       		<Yesyes /> 
       		<Suspense fallback={<Loader />}> 
       				<Nono /> 
       		</Suspense>
       </App>
       // Nono 컴포넌트는 로딩창 보여주고, 렌더 완료된 Yesyes 컴포넌트는 바로 보여줌!
       // 이러한 부분적 렌더링은 부분적 hydration 도 물론 포함됨!
       ```
     ```

     - 추가로,

       위의 `Nono` 컴포넌트가 서버사이드에서 렌더링이 끝나면,

       HTTP stream 을 사용해서

       **브라우저에서 리액트 로딩이 끝나기도 전에**!

       리액트는 `Loader` 컴포넌트의 HTML 을 자동으로 `Nono` 컴포넌트의 HTML로 대체해줌!!

     - 심지어,

       아직 hydarate 되지 않은 리액트 컴포넌트를 유저가 클릭(인터렉트)하면,

       해당 컴포넌트의 hydration을 우선시함!!

<br>

## 주의!

- `Next.js` 경우엔 SSG에서는 Suspense 사용 불가능!