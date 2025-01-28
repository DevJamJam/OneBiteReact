/**
 *  JavaScript에서는 참,거짓이 아닌 값도 참,거짓으로 평가한다.
 *  이것을 Truthy와 Falsy로 부른다.
 */
// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
// -> 7가지의 Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  if (!person) {
    //falsy한 값이 들어올 경우 '!' not연산자를 만나 true가 되어 {}내부 코드 실행후 return
    console.log("person값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "유리" };
printName(person); // 유리
// null이나, undefined 일일 경우엔 person값이 없음 출력
