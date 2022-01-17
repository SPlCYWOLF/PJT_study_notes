참고 : https://nomadcoders.co/typescript-for-beginners/lobby

​		https://serokell.io/blog/why-typescript



## What is TypeScript?

- JS와 매우 유사한 프로그래밍 언어.
- 컴파일 되는 과정에서 JS 코드로 변환됨
- "Super set of JavaScript"



## why TypeScript?

- 버그 최소화
- 코드의 결과 예측, 가독성을 올려줌



## How to use

- Typed Language 이기 때문에, 변수와 데이터의 종류를 알려줘야함.

  ex. 

  ```typescript
  const sayHi: (name: string, age: number, gender: string): string => {
      return `Hello ${name}, you are ${age}, you are a ${gender}`;
  }
  
  console.log(sayHi("TaeHun", 25, "male"));
  ```

  Object 의 데이터 종류는 Interface 를 통해 알려줌.

  ```typescript
  interface Human {	// interface 만 JS에서 작동 안됨.
      name: string;
      age: number;
      gender: string;
  }
  
  const person ={
      name: "TaeHun",
      gender: "male",
      age: 25
  };
  
  const sayHi = (person: Human): string => {
      return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`; 
  }
  ```

  Class 로도 Object의 데이터 종류 알려줄 수 있음

  ```typescript
  class Human {
      public name: string;
      public age: number;
      public gender: string;
      constructor(name: string, age: number, gender: string) {
          this.name = name;
          this.age = age;
          this.gender = gender;
      }
  } 
  
  ...
  ```