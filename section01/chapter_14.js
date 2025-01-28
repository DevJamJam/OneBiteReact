/**
 * 스코프
 * 우리말로 범위을 뜻한다.
 * 변수나 함수에 접근하거나 호출할 수 있는 범위를 말한다.
 * 전역 스코프 : 전체 영역에서 접근가능
 * 지역 스코프 : 특정 영역에서만 접근 가능 (반복문,조건문,함수처럼 중괄호 안에 선언된 변수들 )
 *
 * 추가 사항
 * 함수 선언식만 함수 블록 안에서만 지역 스코프를 갖는다.
 */
function funcA() {
  let a = 1;
}
//console.log(a); // 결과 : chapter_14.js:9 Uncaught ReferenceError: a is not defined

let var1 = 15; // 전역 스코프

function funcTest() {
  let var2 = 10; // 지역 스코프
  console.log(var1, var2);
}
funcTest(); // 결과 : 15 10
