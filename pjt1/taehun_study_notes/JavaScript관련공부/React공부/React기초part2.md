## Regular Expression

참고 : https://towardsdatascience.com/everything-you-need-to-know-about-regular-expressions-8f622fe10b03

- string 의 패턴 매칭에 매우 유용 (전체, 조건부 적용 가능).

- 고로 사용자의 입력값에 조건을 걸때 매우 적합

- ex.

  ```react
  // 대문자 혹은 소문자로 시작 & 이후 3~20문자의 대문자 혹은 소문자 알파벳 혹은 0~9 정수로 구성되어야 함
  const USER_REGEX = /^[a-zA-z][a-zA-Z0-9]{3,20}$/;
  // 최소 1개의 소문자 & 대문자 & 정수 & 특수문자 로 구성되어야 함
  const PW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$*]).{8,24}$/;
  ```

# Hooks

<hr>

참고: https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889

- What are hooks?

  - react built-in JS로 작성된 함수

- Why use hooks?

  - 리액트를 함수형으로 작성 시 함수 내부에서 `state` 활용 불가능.

    하지만 hooks는 함수 내부에서도 `state`와 같은 'react features' 를 활용 가능하게 해줌

  - 고로, 더 넓은 범위의 코드 재사용 하기 위한 코드 작성이 편해지고, 직관적이게 되고, 가독성도 올라감.



## useRef

참고: https://reactjs.org/docs/hooks-reference.html#useref

​		 https://www.daleseo.com/react-hooks-use-ref/

- 인자로 넘어온 초기값을 `current` 속성에 할당 하고,

  `current` 속성을 가지고 있는 객체를 반환.

  해당 `current` 속성은, 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 다시 랜더링 되지 않음

- 구조에 다라, 랜더링으로 인해 함수 내부의 변수들이 값들을 잃어버리게 될 가능성 존재.

  이때, 변수, 함수 들이 기존에 참조하던 상태정보값을 보존해야할 필요 有

  이럴때 `useRef` 가 구세주

- 아래와 같이 활용도 가능

- ex.

  ```react
  import { useRef, useEffect } from "react";
  
  const Register = () => {
      
      // 컴포넌트가 렌더되면 user input에 focus 되도록 사전작업
      const userRef = useRef();
      
      // 컴포넌트가 로드되면 포커스 할 부분을 정의
      useEffect(() => {
        userRef.current.focus();
    	}, [])
      
      return (
        <section>
          <h1>
            Register
          </h1>
          <form>
            <label htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              // userRef 가 해당하는 DOM 지정
              ref={userRef}
              // 유저명 입력값 실시간으로 user state 에 반영
              onChange={(e) => setUser(e.target.value)}
              required>
            </input>
          </form>
        </section>
      )
  }
  ```



## useInterval

- 커스터마이즈 가능!
- `setInterval` 의 단점 보완 가능!