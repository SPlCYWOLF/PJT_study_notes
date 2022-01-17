## 커밋 메세지 구조:

- ```bash
  type: subject
  
  body
  
  footer
  ```



## 커밋 type

- 필수!

- feat : 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 스타일 관련 코드만 변경된 경우
- refactor : 코드 리펙토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정



## Subject

- 필수!

- 50자 넘기지 않고, 첫글자만 대문자로 작성하고, 마침표 x, 과거시제 x



## Body

- 선택사항!
- 72자 넘기지 말고, 제목과 구분 되기 위해 한칸 띄움
- 커밋의 이유 설명할 경우 작성



## Footer

- 선택사항!
- issue tracker id 작성 시 사용



example:

- ```bash
  feat: Add signin logic, and ready to communicate with the server
  ```