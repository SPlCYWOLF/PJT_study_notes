# React 다양한 상태정보 관리 툴 지식 한스푼 ;)

Vercel (next js 회사) 의 개발자 블로그글 [참고](https://leerob.io/blog/react-state-management)

------

<br>

## 🪐 React 에서 State 의 종류:

1. UI state → 어플리케이션의 인터랙티브한 요소들 담당
2. Server cache state → 어플리케이션의 빠른 동작을 위해 client-side 에서 cache 하는 서버로부터의 state
3. form state → form 관련 state 들 (loading, submitting, validation, retrying, disabled, focus, etc) → 두가지 form state 존재 : controlled & uncontrolled
4. URL state → 브라우저에서 관리되는 state → 예시: 페이지 새로고침해도 이전에 위치했던 스크롤 위치까지 돌아감
5. State Machine (참고자료 저자의 추천 [학습 영상](https://egghead.io/lessons/xstate-course-intro-and-overview)) → “An explicit model of your state over time”

<br>

### 😤 왜 굳이 Server cache 와 UI state 를 나눌 필요가 있나?

- 심플합니다. 서버 캐싱은 어렵다하네요..

  - Server caching state 작업 예시:
    - Polling on interval
    - Revalidation on focus
    - Revalidation on network recovery
    - Local mutation (Optimistic UI)
    - Smart error retrying
    - Pagination and scroll position recovery

  고로 옛날부터 서버 캐싱에 특화되어 편하게 해당 기능 구현을 제공하는 라이브러리를 갈망했다는..

<br>

### 🤶 Form state 관리 툴 선택지 정리

| 필요 개발 경험 | 필요 노오력  | Project/Team 규모 | 선택지                            |
| -------------- | ------------ | ----------------- | --------------------------------- |
| Beginner       | Low          | Small             | useState                          |
| Beginner       | Medium       | Medium, Small     | Form Library (Formik, Final Form) |
| Beginner       | High, Medium | Large             | Ask your tech lead                |
| Intermediate   | Low          | Medium, Small     | Form Library (Formik, Final Form) |
| Advanced       | Medium       | Medium            | State Machines                    |
| Advanced       | High         | Medium            | State Machines                    |
| Advanced       | High         | Large             | State Machines                    |

<br>

### 🧘 UI state 관리 툴 선택지 정리

| 필요 개발 경험 | 필요한 노오력 | Project/Team 규모 | 선택지                               |
| -------------- | ------------- | ----------------- | ------------------------------------ |
| Beginner       | Low           | Small             | useState                             |
| Beginner       | Medium        | Medium, Small     | useContext + useReducer              |
| Beginner       | High, Medium  | Large             | Ask your tech lead                   |
| Intermediate   | Low           | Medium, Small     | Redux Toolkit                        |
| Advanced       | Medium        | Medium            | useContext + useReducer              |
| Advanced       | High          | Medium            | Jotai, Valtio                        |
| Advanced       | High          | Large             | Recoil (or Relay if you use GraphQL) |

<br>

### 💨 Server cache state 관리 툴 선택지 정리

1. [SWR](https://swr.vercel.app/ko)
2. [React Query](https://react-query.tanstack.com/)
3. [Apollo](https://www.apollographql.com/) (graphQL 활용시 시도 추천)