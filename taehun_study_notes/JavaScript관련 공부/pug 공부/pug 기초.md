참고 : https://www.youtube.com/watch?v=gEoH0_alVKg&list=PLz_6dB4PItBEYHIDnXPUI81pTQ_71eEqS&index=2



### What is pug?

- HTML pre-processor === pug 코드로 html 작성 후 명령어를 통해 자동 html 코드 생성해줌!



### Why use pug?

- HTML 작성을 더욱 심플하고 빠르게!
- ex. `<>` 와 `</div>`  생략! ,  nested tag 는 indentation 으로, etc!
- 블록 형태로 코드 작성 가능 === 코드의 재사용성 up
- JavaScript 와 HTML 을 함께 활용! === 정적 HTML 코딩에서 벗어나 동적 코딩 가능!



### How to use pug?

- ex.

  ```html
  <!-- index.pug -->
  doctype html
  html
  	head
  		title what an amazing day!
  	body
  		h1 Hello pug world!
  ```

  터미널에 `pug index.pug -P` 입력하면.. ↓

  ```html
  <!-- index.html -->
  <!DOCTYPE html>
  <html>
      <head>
          <title>what an amazing day!</title>
      </head>
      <body>
          <h1>Hello pug world!</h1>
      </body>
  </html>
  ```

  두둥 하고 생성..!

  위와 같이 일일히 변환하는 과정이 귀찮으면, 자동 변환 설정도 가능.

  - `pug -w . -o ./ -P`

    -w => watch (디렉토리의 위치 본다)

    . => 현재 디렉토리

    -o => output

    ./ => output 디렉토리 (현재 디렉토리)

    -P => pretty (human 가독을 위한 output code style)



### 더 자세한 활용법은 참고 링크의 유튜브 링크 확인!