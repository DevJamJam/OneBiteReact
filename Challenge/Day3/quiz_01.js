/**
 * 다음 요구사항을 만족하는 코드를 작성하세요
 *
 * - 변수 num의 모든 약수를 다 찾아서 출력하세요
 */

let num = 100;

for (let idx = 0; idx < num; idx++) {
  if (num % idx === 0) {
    console.log(idx);
  }
}
