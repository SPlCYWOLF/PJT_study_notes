import { useRef, useState, useEffect } from "react";

// https://towardsdatascience.com/everything-you-need-to-know-about-regular-expressions-8f622fe10b03
// 대문자 혹은 소문자로 시작 & 이후 3~20문자의 대문자 혹은 소문자 알파벳 혹은 0~9 정수로 구성되어야 함
const USER_REGEX = /^[a-zA-z][a-zA-Z0-9]{3,20}$/;
// 최소 1개의 소문자 & 대문자 & 정수 & 특수문자 로 구성되어야 함
const PW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$*]).{8,24}$/;


// react functional 컴포넌트이다.
const Register = () => {
  //https://reactjs.org/docs/hooks-reference.html#useref
  const userRef = useRef(); // 컴포넌트가 렌더되면 user input에 focus 되도록 사전작업
  const errRef = useRef(); // 에러 발생시 해당 위치로 포커스 이동시키기 위한 사전작업

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);

  const [pw, setPw] = useState('');
  const [validPw, setValidPw] = useState(false);

  const [matchPw, setMatchPw] = useState('')
  const [validMatchPw, setValidMatchPw] = useState(false)

  const [errMsg, setErrMsg] = useState('');
  // const [successMsg, setSuccessMsg] = useState(false);

  // 컴포넌트가 로드되면 포커스 할 부분을 정의
  useEffect(() => {
    userRef.current.focus();
  }, [])

  // 유저 필드의 validation 확인하는 코드
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  // PW 와 PW확인을 하나의 useEffect에 넣는 이유 == 둘 중 하나라도 바뀌면 valid state를 바꾸기 위해
  useEffect(() => {
    const result = PW_REGEX.test(pw);
    console.log(result);
    console.log(pw);
    setValidPw(result);

    const match = pw === matchPw;
    setValidMatchPw(match)
  }, [pw, matchPw])

  // 에러메세지를 보고 유저가 재입력 == 에러 메세지 삭제
  useEffect(() => {
    setErrMsg('');
  }, [user, pw, matchPw])

  return (
    // div 보다는 의미론적인 section 을 활용
    <section>
      <p // 에러 발생하면 해러 메세지로 화면 포커스
      ref={ errRef } 
      // 에러 메세지가 존재하면 에러메세지 출력되는 클래스명으로.
      // 에러 메세지가 존재하지 않으면 offscreen (display none 의 대용) <= 더 공부 필요
      className={errMsg ? "errmsg" : "offscreen"}
      >{ errMsg }</p>
      <h1>
        Register
      </h1>
      <form>
        <label htmlFor="username">
          Username:
          <span 
            // 유요한 입력 값이면 표시
            className={validName ? "valid" : "hide"}>
            confirmed!
          </span>
          <span 
          // 입력 값이 invalid 하거나 user state 이 빈값이면 보여주지 않는다
            className={validName || !user ? "hide" : "invalid"}>
            nope, read the instruction            
          </span>
        </label>
        <input
          type="text"
          id="username"
          // 인풋란으로 포커스가 맞춰지도록 ref 작성
          ref={userRef}
          // 유저명 입력값 실시간으로 user state 에 반영
          onChange={(e) => setUser(e.target.value)}
          required>
        </input>
        
      </form>
    </section>
  )
}

export default Register