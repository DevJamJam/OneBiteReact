/* 
다음 요구사항을 만족하는 코드를 작성하세요

- 변수 a의 저장된 값의 타입을 문자열로 출력하세요
- 조건문과 typeof 연산자를 이용해 코드를 작성하세요
  - ex) a가 number 타입이라면 console.log("숫자")
  - ex) a가 string 타입이라면 console.log("문자열")
  - ex) a가 boolean 타입이라면 console.log("불리언")
  - ...
*/

const a = true;

switch (a) {
  case typeof a === number: {
    console.log("숫자");
    break;
  }
  case typeof a === string: {
    console.log("문자열");
    break;
  }
  case typeof a === boolean: {
    console.log("불리언");
    break;
  }
  default: {
    console.log("해당 타입은 문자도 숫자도 불리언도 아닙니다.");
  }
}
