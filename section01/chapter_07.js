/**
 *  연산자
 *  프로그래밍에서의 다양한 연산을 위한 기호,키워드를 말한다
 */

// 1. 대입 연산자
let var1 = 1; // '=' 대입 연산자

// 2. 산술 연산자 +,-,*,/,%
let sum = 1 + 2;
let subtraction = 3 - 2;
let multiplication = 3 * 2;
let division = 10 / 5;
let remainder = 9 % 2;

console.log(
  `산술 연산자 값
   더하기 : ${sum}
   빼기 : ${subtraction}
   곱하기 : ${multiplication}
   나누기 : ${division}
   나머지 : ${remainder}`
);

/**
 * 산술 연산자 값
   더하기 : 3
   빼기 : 1
   곱하기 : 6
   나누기 : 2
   나머지 : 1
   덧셈 뺄셈 보다 나누기, 곱하기, 나머지 연산이 더 우선순위 이다.
 */

// 3. 복합 대입 연산자 : '=' 앞에 모든 산술 연산자 기호가 올 수 있다.

let multiNum = 15;
multiNum += 10; // 더하고 대입
console.log(multiNum); // 결과 값 : 25
multiNum -= 5; // 빼고 대입
console.log(multiNum); // 결과 값 : 20

// 증감 연산자 : 값을 1씩 늘리거나, 1씩 줄일 때 사용
let plusMinusNum = 1;
plusMinusNum++; // 후위연산 : 해당 라인이 끝나고 나서야 실행
// 전위연산 : 해당 라인에서 실행 되었음 한다면 변수명 앞에 ++ 붙이면 된다.
console.log(plusMinusNum); // 결과 값 : 2
plusMinusNum--;
console.log(plusMinusNum); // 결과 값 : 1

// 4. 논리 연산자 : Boolean 타입의 값을 다룰 때 사용하는 연산자
//    or 연산자 '||' : 하나만 참이여도 참
//    and 연산자 '&&' : 양쪽이 다 참이여야 참
//    not 연산자 '!' : 참이면 거짓을 거짓이면 참을 출력

let or = true || false;
let and = true && false;
let not = !true;

console.log(`논리 연산자 값 : ${or} / ${and} / ${not}`);
// 논리 연산자 값 : true / false / false

// 5. 비교 연산자 : 두개의 값을 비교하는 연산자
let comp1 = 1 === 2; // 동등 비교 연산자 '==='
// why '===' ? : '=='시 값 자체로만 비교하기때문에 자료형이 달라도 값이 같으면 true가 나오므로,
// 자료형이 다를때엔 다른값으로 보는게 일반적이기 때문에 '==='을 쓴다.
let comp2 = 1 !== 2; // 비동등 비교 연산자  '!=='

console.log(`비교 연산자 결과 값 : ${comp1} / ${comp2}`);
// 비교 연산자 결과 값 : false / true

// 6. 대소 비교 연산자
let comp3 = 2 > 3; // 2가 3보다 큰가 ?
console.log(comp3); // flase
let comp4 = 2 < 1; // 1이 2보다 큰가 ?
console.log(comp4); // false

// 같거나 크다, 작거나 같다 표현 할 때는 ?
let comp5 = 2 >= 1; // 1이 2보다 크거나 같은가? 왼쪽에 있는 값이 오른쪽에 있는 값보다 크거나 같은가?
let comp6 = 3 <= 5; // 3가 5보다 작거나 같은가? 왼쪽 값이 오른쪽 값보다 작거나 같은가 ?
console.log(comp5, comp6); // true , true
