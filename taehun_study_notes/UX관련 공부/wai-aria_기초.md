

## Wai-aria 

> If you can use a native HTML element or attribute with the semantics and behaviour you require already built-in, instead of repurposing an element and adding an ARIA role, state or property to make it accessible, then do so.
>
> [참고](https://tink.uk/the-difference-between-aria-label-and-aria-labelledby/#:~:text=If%20you%20can%20use%20a%20native%20HTML%20element%20or%20attribute%20with%20the%20semantics%20and%20behaviour%20you%20require%20already%20built%2Din%2C%20instead%20of%20repurposing%20an%20element%20and%20adding%20an%20ARIA%20role%2C%20state%20or%20property%20to%20make%20it%20accessible%2C%20then%20do%20so.)



### 헷갈리는 부분들

- role="button" vs role="link"
  - 버튼 == 유저의 클릭에 특정 반응을 하는 요소
  - 링크 == 해당 앱 내부 or 외부의 resource로 이동되는 hyperlink 요소



### 이미지를 대상으로 Enter 키 인식 할 수 있게 하는 방법

- 일반적인 button, Link 등의 태그는 enter 안먹힘
- 오직 href 값을 가진 a태그만이 가장 자연스럽게 enter 인식함

### spacebar 인식 방법

- 가장 자연스러운 방법은 `button` 태그 활용



### semantic 태그의 중요성

- 애초에 non-semantic 태그는 screen reader에 안잡힐 수 있다 (ex. span tag)
- 물론 `role` 속성을 부여해서 screen reader에  잡히게 할 수는 있지만, MDN의 권장사항으로써 활용 목적에 따라 올바른 의미를 가진 semantic 태그를 활용하는걸 목표로 하자 (코드 가독성도 올라가고, wai-aria 코드 작성 필요성도 줄어드는 1석 2조 효과)



### role 속성에 대하여

[참고](https://www.youtube.com/watch?v=CwlNSWUluVc)

- html에서 구역을 나타내는 요소 === landmark (ex. main, navigation, header, footer, etc)

- html 요소로 landmark 정의를 하고, aria의 role 속성도 적용시키는건 no good.

- aria 에서 role 속성 === landmark 요소

  - 좌: html & 우: aria

    main === main

    section === region

    div === application

    aside === complementary

    form === form

    없음(div or form 권장) === search

    footer === contentinfo
