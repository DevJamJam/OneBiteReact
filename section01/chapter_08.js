/**
 * null 병합 연산자 : 존재하는 값을 추려내는 기능을 하는 연산자
 * null or undefined 가 아닌 값을 찾아내는 연산자
 */

let var1;
let var2 = 10;
let var3 = 25;
let noNull = 5;

let var4 = var1 ?? var2; // '??' null 병합 연산자  : 양쪽 값중 null이나 undefined가 아닌 값을 찾아서 반환
let var5 = var1 ?? var3;
let var6 = var2 ?? noNull;
console.log(var4); // 결과 : 10
console.log(var5); // 결과 : 25
// null 병합 연산자에 참여하는 두 개의 피연산자가 둘 다 null이나 undefined가 아닐경우 맨 처음 적힌 값이 반환!
console.log(var6); // 결과 : 10

/**
 * 실무 사용 ex
 * userName 값이 없을때엔 userNickName값을 출력하도록 해주세요 라는 요구사항 일 때
 */

let userName;
let userNickName = "잼잼";

let displayName = userName ?? userNickName;
console.log(displayName); // 결과 : 잼잼

/**
 * typeof 연산자
 * 값의 타입을 문자열로 반환하는 기능을 하는 연산자
 */

let var7 = 1;
console.log(typeof var7); // number
var7 = "Test";
console.log(typeof var7); // string

/**
 *  삼항 연산자
 *  항을 3개 사용하는 연산자
 *  대다수의 연산자는 이항 연산자
 *  조건식을 이용해서 참이나 거짓일때의 값을 다르게 반환하는 기능을 한다.
 */

let var8 = 15;

// 요구사항 : 변수 res에 var8의 값이 짝수 => "짝", 홀수 => "홀"을 저장
let res = var8 % 2 === 0 ? "짝" : "홀";
// 식 해석 var8의 값이 2로 나누었을때 나머지가 0 이라면 즉 짝수라면, "짝"을 저장
// 0이 아니라면, 즉 홀수라면 "홀"을 저장

console.log(res); // 결과 : 홀
