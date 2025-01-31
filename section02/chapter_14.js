/**
 *  비동기작업 처리하기 - Async & Await
 *  Async
 *  - 어떤 함수를 비동기 함수로 만들어 주는 키워드
 *  - 함수가 Promise를 반환 하도록 변환해주는 그런 키워드
 *  Await
 *  - async 함수 내부에서만 사용이 가능 한 키워드
 *  - 비동기 함수가 다 처리되기를 기다리는 역할
 */

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "하다",
        id: "JangHaDa",
      });
    }, 1500);
  });
}
// 애초에 Promise 를 반환하고 있는 비동기 함수였다면 , async 키워드가 별다른 일을 하지않고
// 해당 Promise가 반환 되도록 내버려 둔다.
// async
// => Promise를 반환하지 않는 함수에 붙여 자동으로 해당함수를 비동기로 작동하도록 변환하는 기능을 한다.
console.log(getData());
/**
 *  [[Prototype]] : Promise
 *  [[PromiseState]] : "fulfilled"
 *  [[PromiseResult]] : Object
 *      id : "JangHaDa"
 *      name : "하다"
 *      [[Prototype]] : Object
 */

async function printData() {
  const data = await getData();
  console.log(data); // {name: '하다', id: 'JangHaDa'}
}
printData();
