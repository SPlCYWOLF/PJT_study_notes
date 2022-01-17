# React Style guide

리액트에는 컴포넌트 생성 방식이 두가지 : class vs function.

이번 프로젝트의 스타일 가이드로, 컴포넌트 생성 방식을 하나만 선택할지, 둘 다 활용할지 고민.

고로, 두 방식의 차이에 중점을 두며 전반적인 react 스타일 가이드를 연구합니다.

<hr>



## 강력 후보 : [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

- Issue 1:

  - state를 가진 컴포넌트는 클래스로 구현하도록 언급됨.

  - 하지만, [공식문서](https://reactjs.org/docs/hooks-intro.html) 상에서는 왠만하면 함수형 컴포넌트를 추천하는 뉘앙스.

- Issue 2:

  - vsc 상에서 해당 스타일가이드를 지정 가능. ([참고](https://blog.bitsrc.io/how-to-set-up-airbnb-style-guide-for-react-projects-fc7dfb1f3d68))
  - 하지만 Issue 1 으로 인해 문제 발생 가능성 有

- Issue 3:

  - Mixins 사용 x

  - 대표적인 대안으로 High Order Component 개발패턴이 존재.

    HOC 장점: 

    ​	기능 테스트 측면에서 우위

    ​	separation of concerns 측면에서 우위

    HOC 단점:

    ​	컴포넌트의 레이어 복잡화 == 가독성 down

### 결론

- 부분적으로 Airbnb 스타일 가이드 적용.
  - 현 시점 배제 내용:
    - 클래스 컴포넌트
    - vsc 상에서 스타일가이드 지정