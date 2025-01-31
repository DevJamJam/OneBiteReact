/**
 *  비동기 작업 처리하기 - 콜백함수
 */

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}
// 비동기 작업을 하는 함수의 결과값을 해당 함수 외부에서 사용하고 싶을 경우
// 하단의 코드와 같이 콜백함수를 사용하여 비동기함수 안에서 콜백함수를 호출하도록
// 설정해주면 된다.
add(2, 4, (value) => {
  console.log(value);
}); // 3초뒤 2 + 4 인 6출력

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "고기";
    callback(food);
  }, 5000);
}
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 3000);
}
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
  // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달하는 것도 가능하다.
});
/**
 *  코드 실행 과정
 *  1. orderFood 타이머 동작 5초뒤 callback 함수 실행  food 출력
 *  2. cooldownFood 타이머 동작 2초뒤 callback 함수 실행  cooldownedFood 출력
 *  3. freezeFood 타이머 동작 3초뒤 callback 함수 실행 freezedFood 출력
 *
 *  비동기 작업의 결과를 또 다른 비동기 작업의 인수로 활용하는 코드가 반복되면
 *  콜백함수 내부에서 계속 콜백함수를 호출하는 문법으로 코드가 계속 작성되게 될 것이고
 *  인덴트(들여쓰기)가 점점 깊어지는 형태로 코드가 진화하여 기능이 늘어날수록 더 깊어지고
 *  가독성이 떨어지는 콜백 지옥 발생
 */
