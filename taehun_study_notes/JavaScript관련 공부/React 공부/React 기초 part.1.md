참고 : https://nomadcoders.co/react-for-beginners/lobby

# 기본기

<hr>

## State 

- 컴포넌트의 state를 modifier 함수로 바꾸면, 

  오직 해당 컴포넌트만 리렌더링 됨.

- state 변경 2가지 방법:

  1. `setState(state + 1)`  =>  직접 값을 설정
  2. `setState((current) => current+1)`  =>  함수를 전달하기 (이게 더 버그 방지에 좋다는데..)



## useEffect

- Vue 에서 `watch` 랑 비슷한 느낌?

- state 를 바꾸는 코드가 포함된 함수는 state가 바뀌면 모두 다시 실행됨.

  처음 render 시에만 render하고 이후에는 render를 안하고 싶은 컴포넌트인 경우가 분명 존재.

  ex. API 호출 컴포넌트

- 바라보는 dependency list의 state가 바뀔때만 실행 되도록 프로텍션 쉴드

  ex. `useEffect(() => {console.log("wow" )}, [])`  =>  한번만 실행 (dependency list가 빈 리스트니까!)

  ​	`useEffect(() => {console.log("ho") }, [keyword])`  => `keyword` 의 state가 변할때마다 실행



## Cleanup function ()

- 컴포넌트를 destroy 한 직후 실행되는 함수

- 자주 활용은 안 될듯..

- useEffect 에서 활용되는 콜백함수의 리턴 함수 === cleanup function

- ```react
  useEffect(() => {console.log("keyword changed!")}, [keyword];
  	return () => { console.log("destroyed!") };
  )
  ```



## React Router

- 두가지 종류:
  1. Browser Router
     - 보통 웹사이트 URL 처럼 생김  =>  `/movie/wow`
  2. HashRouter
     - '샵' 이 추가된 URL  =>  `/movie/#/wow`

- react-router-dom 설치하고 `Router` 컴포넌트를 생성하고, 

  그 안에 작성되는 모든것들  =>  URL에 따라 유저에게 보여줄 내용들.

  `Switch` 컴포넌트는 한번에 하나의 `Route` 만 렌더링 해주기 위함

- ```react
  import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
  import Detail from "./routes/Detail";
  import Home from "./routes/Home";
  
  function App() {
    return (
      <Router>
        <Switch>
        	<Route path="/movie/:id">
        	  <Detail />
        	</Route>
        	<Route path="/">
        	  <Home />
        	</Route>
        </Switch>
      </Router>
    );
  }
  ```

- **Link 컴포넌트** : 

  - 브라우저 새로고침 없이 다른 페이지로 이동 시켜주는 컴포넌트
  - UX up!

- `useParams` 함수로 `Route path="/movie/:id"` 에 `id` property를 쉽게 가져올 수 있다!



## Aria properties

참고 : https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

- screen reader 사용자를 위한 프로퍼티 자세한건 추후 추가 공부