/**
 *  자료형 : 집합이다.
 *  원시타입 과 객체타입 으로 나뉜다.
 *  해당 chapter에서는 원시타입을 다룰 예정
 *  기본형 타입이라고도 하며, 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미
 *  원시타입은 동시에 한개의 값만 변수에 저장될 수 있다.
 */

// 1. Number Type : 정수, 실수 ,음수 모든 숫자값 포함
let num1 = 5;
let num2 = 1.05;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num3 * num1);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산이라고 부른다.

// 숫자로 보이지 않는 값들도 포함되어 있다.
let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // Not a Number 라는 뜻
// 수치 연산 실패했을때 결과값으로 사용
console.log(num1 * "Hello"); // 결과 값 : NaN

// 2. String Type : 모든 문자열 값 포함
let myName = "JamJam";
// "" 혹은 '' 으로 감싸주어야 한다.
// 만약 안 붙이게 되면 해당 값을 변수명으로 취급하기 때문
// JavsScript 문자열은 덧셈연산 지원한다.
let myAddress = "서울시 성동구";
let myIntroduce = myName + myAddress;
console.log(myIntroduce); // 결과 값 : JamJam서울시 성동구

/**
 *  `` 백틱
 *  변수의 값을 동적으로 넣을 수 있다.
 *  해당 문법을 템플릿 리터럴 문법이라 부른다.
 */
// 백틱 ex
let backTestIntro = `${myAddress} 에 사는 ${myName} 입니다.`;
console.log(backTestIntro); // 결과 값 : 서울시 성동구 에 사는 JamJam 입니다.

// 3. Boolean Type : true, false 값만을 저장하는 타입
// 현재의 상태를 의미하는데 주로 사용
let isSwitch = true;
let isEmpty = false;

// 4. Null Type : 아무것도 없다 라는 뜻
let empty = null;
// 해당 변수에 아무런 값도 담겨있지 않음을 표현하기 위해 사용된다.

// 5. Undefined Type : 변수 초기화 안할때 자동으로 할당 되는 값
let none;
console.log(none); // 결과 값 : undefined

// null과 undefined
// null : 프로그래머 or 개발자가 직접 변수에 어떠한 값도 없다는 것을 표현할 때 사용
// undefined : 변수 선언 후 초기화 안했을때 자동할당, 존재하지 않는 값을 불러오려 할때 발생하는 값
