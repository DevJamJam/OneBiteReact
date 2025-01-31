/**
 *  비동기 작업 처리하기 - Promise
 *  특수한 목적을 위해서 존재하는 자바스크립트 내장객체로
 *  비동기 작업을 실행하고 그 결과를 처리하는 코드를 좀 더 효율적이고 좀 더 편하게 작성할 수 있도록 도와준다.
 *  setTimeout 함수와 같은 비동기 작업들을 랩핑하는, 즉 감싸는 객체
 *  감싸고 있는 비동기 작업을 실행 시켜주거나, 현재의 상태를 관리하거나, 비동기 작업의 결과를 저장해주거나,
 *  여러개의 작업을 병렬로 동시에 실행시켜 준다거나, 다시 실행시켜 주는 등의 비동기 작업을 처리하는데 필요한
 *  거의 모든 기능을 제공해주는 객체다.
 */

// executor 에는 2가지의 매개변수가 전달이 된다.
// 첫번째 매개변수 resolve, 두번째 매개변수 reject
// resolve : promise 작업 (비동기 작업)을 성공상태로 바꾸는 함수가 들어있다.
// reject : promise 작업 (비동기 작업)을 실패상태로 바꾸는 함수가 들어있다.
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 callback 함수 executor 라고 부른다.
  setTimeout(() => {
    console.log("안녕하세요");
    //reject("실패야.."); // PromiseResult의 결과는 해당 함수 호출 시 인수로 넣어줘야 한다.
    resolve("성공했어"); // PromiseResult의 결과는 해당 함수 호출 시 인수로 넣어줘야 한다.
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);
/**
 * 3초 뒤 안녕하세요 출력
 * promise 객체 출력
 * 객체 세부 사항
 *   [[Prototype]] : Promise
 *   [[PromiseState]] : "fulfilled" - resolve()함수 호출로 성공상태
 *   [[PromiseResult]] : "성공했어" - resolve함수에서 인수로 넘긴 메세지
 *
 *  3초 뒤 안녕하세요 출력
 *  Uncaught (in promise) 실패야.. 출력
 *  promise 객체 출력
 *  객체 세부 사항
 *    [[Prototype]] : Promise
 *    [[PromiseState]] : "rejected" - reject()함수 호출 실패상태
 *    [[PromiseResult]] : "실패야.." - reject함수에서 인수로 넘긴 메세지
 */

//console.log(promise)
/**
 * console.log(promise) 동작
 * promise 객체 출력
 * 객체 세부 사항
 *   [[Prototype]] : Promise
 *   [[PromiseState]] : "pending" - 대기상태
 *   [[PromiseResult]] : undefined - 결과값 아직 대기상태 이므로 undefined
 * 2초뒤 안녕하세요 출력
 */

/**
 * 함수를 하나 생성하여, const num 이라는 값을 고정된 값으로 사용하지 않고
 * 함수 안에서 프로미스 객체를 새롭게 생성하며 동적으로 매개변수를 받아와서 바꿔가면서 사용할 수 있도록
 * 코드를 바꿔 보자 !
 */
function add10(num) {
  const promiseEx = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promiseEx;
}

add10(5)
  .then((result) => {
    console.log(result); // 15 출력
    return add10(result);
    // return을 명시하지않았을때엔 원본 Promise객체가 반환이 되었지만,
    // 새로운 Promise 객체를 반환하도록 해주면 then메서드의 결과 값이 새로운 Promise 객체가 된다.
  })
  .then((result) => {
    console.log(result); // 25 출력
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 35출력
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 45출력
  })
  .catch((error) => {
    console.log(error);
  });

// 마지막에 catch()를 작성해도 중간에 then에서 오류가 발생하면 마지막 catch문으로 넘어간다.

/**
 *  .then() 체인 중간에서 reject()가 발생하면, 남아있는 then()은 실행되지 않음.
 *  .catch()는 가장 가까운 reject()를 감지하고 실행됨.
 *  한 번 .catch()가 실행되면 이후 모든 체인은 종료됨. (다시 then()으로 돌아가지 않음)
 */

/** Promise Chaining */
// then 메서드
// => 그 후에 라는 뜻
// => promise가 성공 했을 때 인수로 전달 한 콜백함수가 실행된다.
// => 매개변수로 결과 값 전달 받는다.

// catch 메서드
// => 실패 버전의 then 메서드
// => then과 같이 인수로 콜백함수를 전달해주면 프로미스가 실패했을때 해당 콜백함수를 실행시켜주게 된다.
// => then과 같이 매개변수로 결과 값을 전달 받는다.

// then과 catch를 잘 활용하면 프로미스가 관리하는 비동기 작업이 성공하거나, 실패했을 때
// 그 결과 값을 이용할 수 있다.
// Promise의 then 메서드는 해당 Promise를 다시 반환 한다.
// 즉 Promise객체를 반환한다.
// 그러므로 따로 Promise 호출 하지 않고 .catch를 바로 연결해서 사용하는 것도 가능하다.
// 해당 문법이 마치 Chaining 하는 것 같다 하여 Promise Chaining라고 표현한다.
