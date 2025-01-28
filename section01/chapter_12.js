/**
 *  함수 표현식과 화살표 함수
 */

function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수자체를 varA에 저장
console.log(varA);
/**
 *  결과 : 함수 자체가 출력 된다.
 *  ƒ funcA() {
 *    console.log("funcA");
 *  }
 *  자바스크립트에서는 함수도 숫자,문자열과 같은 하나의 값으로서서 취급하기 때문에 함수 자체를 변수에 담을 수 있으며,
 *  변수의 이름인 varA()로 호출할 수있다.
 */
varA(); // funcA

let varB = function funcB() {
  console.log("funcB");
};
// funcB의 경우에는 선언식을 통해 함수가 선언 된 것이 아닌 값으로써 함수가 생성된 것이기 때문에
// 함수 이름인 funcB로 부를 수 없다.
varB(); // funcB

// 어차피 함수 이름으로 부를 수 없으므로 함수 이름을 생략해도 된다 => 익명함수(이름이 없다)
let varC = function () {
  console.log("funcC");
};

/**
 *  값으로 써 함수를 생성하는 방식 => 함수 표현식
 *  함수 표현식으로 만든 함수는 호이스팅 대상 X
 */

/* 화살표 함수 */
let varD = () => {
  return 1;
};
// 만약 값을 리턴하기만 한다면 ?
// let varD = () => 1;
// ()에 매개 변수를 넣을수도 있다.
// let varD = (value) => value + 5;
console.log(varD()); // 1
