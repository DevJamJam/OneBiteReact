/**
 *  단락평가
 *  첫번째 피연산자의 값만으로도 연산의 결과를 확정할 수 있다면,
 *  두번째 피연산자의 값에는 아예 접근하지 않는 자바스크립트의 특징
 *  논리연산식에서 Truthy한 값 or Falsy한 값이 사용 되었을때엔 연산의 결과가 Truthy하거나 Falsy한 값 그 자체가 된다.
 */

function returnFalse() {
  console.log("False 함수");
  return false;
}
function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
// False 함수
// false
// 단락평가로 두번째 피 연산자 값 접근 X
console.log(returnTrue() && returnFalse());
// True함수
// False함수
// false
// 단락평가 동작 X
console.log(returnTrue() || returnFalse());
// True 함수
// true
// 단락평가로 두번째 피 연산자 값 접근 X

function falsyReturn() {
  console.log("Falsy 한 값");
  return undefined;
}
function truthyReturn() {
  console.log("Truthy 한 값");
  return 25;
}
console.log(truthyReturn() || falsyReturn());
// Truthy한 값
// 25
// 단락평가로 두번째 피 연산자 값 접근 X
console.log(falsyReturn() && truthyReturn);
// Falsy한 값
// undefined
// 단락평가로 두번째 피 연산자 값 접근 X
console.log(truthyReturn() && falsyReturn());
// Truthy한 값
// Falsy한 값
// undefined
// 단락평가 이루어지지 않는다.

// 단락평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "율" }); // 율
/**
 *  어떻게 이렇게 되는가?
 *  || 연산자의 경우 두 값이 다 참이라면 첫번째 값이 반환
 *  && 연산자의 경우 두 값이 다 참이라면 두번째 값이 반환
 */
