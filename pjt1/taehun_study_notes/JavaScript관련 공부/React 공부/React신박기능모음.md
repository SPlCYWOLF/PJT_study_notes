참고 : https://www.youtube.com/watch?v=7mkQi0TlJQo

# React 18 굿 기능들 모음!

<hr>

## React Suspense

1. **CSR : Data fetching via compatible libraries (ex. Relay)**

   - ex.

     ```react
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

     ```react
     function Profile() {
         const { data: profile, isLoading } = useQuery("profile", fn);
         if (isLoading) {
             return <Loader />;
         }
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     ```

     하지만, React Suspense 활용으로 아래와 같이 더욱 깔끔하게 작성 가능!

     ```react
     // profile.js
     function Profile() {
         const { data: profile } = useQuery("profile", fn);
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     
     // App.js
     <Suspense fallback={<Loader />}>
     	<Profile />
     </Suspense>
     
     // 로딩 state 를 아예 컴포넌트 밖에서 관리하기 때문에 코드가 훨씬 직관적!
     ```

     - 리액트18의 fetching library 에서 자동으로 

       컴포넌트의 data fetching 이 완료 되기 전까지는

       Suspense 안에 정의한 Loader 컴포넌트를 사용자에게 보여줌!

       data fetching 완료되면 해당 컴포넌트로 자동 전환!

       

2. **SSR : Streaming server rendering (위의 기능을 SSR 으로도 구현 가능..!!)**

   - <u>사진 지식: CSR vs SSR</u>

     - CSR 은 유저의 브라우저가 리액트 코드를 다운 => 실행 => 렌더 (View 페이지를 그려줌).
       - JS가 브라우저에서 비활성화 or 인터넷 느리면 UX 리스크 up

     - SSR 은 유저에게 응답 전, 서버에서 리액트 실행 => 렌더 => 결과 View 페이지 유저에게 제공.

       하지만, 해당 시점에선 html (view페이지) 만 보일 뿐, interaction 은 아직 없음 (브라우저에서 리액트 로딩 아직 안됨)

       이때 Hydration 프로세스 실행.

       - 유저가 HTML 응답 받으면, CSR 과 같은 프로세스 시작!

         => 이미 존재하는 HTML 과 동기화하는 작업임. 인터렉티비티가 생김.

     - 결론적으로, CSR 에서는 리액트 파일의 로딩이 완료되기까지 유저는 빈 화면을 볼텐데,

       SSR 에서는 리액트 파일 로딩이 안되도, UI 확인 가능 (인터렉티브 요소는 기다려야겠지만!)

   - <u>SSR 의 문제점!</u>

     - 아래와 같은 경우, 

       유저는 Nono 컴포넌트의 렌더링이 끝나기 전에는 Yesyes 컴포넌트를 못봄.

       ```react
       <App>
       	<Yesyes />
           <Nono />	//매우매우 heavy해서 렌더링이 10분 걸리는 컴포넌트..
       </App>
       // 고로, 유저는 CSR 와 같이 빈 화면만 보게되겠지..
       ```

   - <u>Suspense 로 위와 같은 문제 해결</u>

     - ```react
       <App>
       	<Yesyes />
           <Suspense fallback={<Loader />}>
           	<Nono />
           </Suspense>
       </App>
       // Nono 컴포넌트는 로딩창 보여주고, 렌더 완료된 Yesyes 컴포넌트는 바로 보여줌!
       // 이러한 부분적 렌더링은 부분적 hydration 도 포함됨!
       ```

     - 추가로, 

       위의 Nono 컴포넌트가 서버사이드에서 렌더링이 끝나면,

       HTTP stream 을 사용해서

       **브라우저에서 리액트 로딩이 끝나기도 전에**!

       리액트는 Loader 컴포넌트의 HTML 을 자동으로 Nono 컴포넌트의 HTML로 대체해줌!!

     - 심지어,

       아직 hydarate 되지 않은 리액트 컴포넌트를 유저가 클릭(인터렉트)하면,

       해당 컴포넌트의 hydration을 우선시함!!



## Server Component

1. **리액트 컴포넌트의 렌더링 위치 설정 기능**

   - 백엔드에서만 실행되는 리액트 컴포넌트.. ㄷㄷ

   - 고로, 이제는 컴포넌트마다 브라우저 or 서버 or 둘다 에서 render 할지 설정 가능..!

   - ex:

     - 매우 무거운 패키지를 동반한 컴포넌트는 서버컴포넌트로 작성.

       고로, 

       서버에서 렌더링 => 유저는 해당 패키지 다운로드 필요x => 로딩타임 down => UX up!

2. **DB와 직접적으로 소통 가능한 컴포넌트**

   - Client-side 에서 DB호출하는건 보안적으로 매우 위험

   - 하지만 server component는 오직 서버에서만 존재하고, 브라우저에서는 절대 실행 안됨.

     고로!

     리액트 컴포넌트에서 SQL 쿼리문으로 DB와 직접적 통신 가능!