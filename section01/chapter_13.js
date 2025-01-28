/**
 * 콜백함수란 ?
 *  자신이 아닌 다른 함수에 인수로써 전달 된 함수를 의미 한다.
 *  main함수가 언제든 지 원하는 타이밍에 실행 시킬 수 있다.
 */

// 1. 콜백함수
function main(value) {
  console.log("콜백함수 호출 전 실행 1");
  console.log("콜백함수 호출 전 실행 2");
  value();
  console.log("콜백함수 호출 후 실행");
}

// function sub() {
//   console.log("I'm sub");
// }
// main(sub);

main(() => {
  console.log("I'm sub");
});
/**
 * 결과 :
 * 콜백함수 호출 전 실행 1
 * 콜백함수 호출 전 실행 2
 * I'm sub
 * 콜백함수 호출 후 실행
 */

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }
// repeat(5); // 1,2,3,4,5
// repeatDouble(5); // 2,4,6,8,10
repeat(5, (idx) => {
  console.log(idx);
}); // 1,2,3,4,5
repeat(5, (idx) => {
  console.log(idx * 2);
}); // 2,4,6,8,10
repeat(5, function (idx) {
  console.log(idx * 3);
}); // 3,6,9,12,15
