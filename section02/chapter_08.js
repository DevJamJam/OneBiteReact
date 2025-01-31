/**
 *  배열 순회와 탐색 메서드
 *  5가지의 요소 순회 및 탐색 메서드
 */

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 동작을 하는 메서드
let arr1 = [1, 2, 3];
// 배열이름.forEach(콜백함수)
// 콜백함수는 배열 요소의 갯수만큼 호출이 된다.
// 호출 될 때마다 콜백함수 내 매개변수 현재 요소의 값, 현재 반복 카운트, 배열의 값 을 전달해준다.
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
  /**
   *  코드해석 : 현재 반복카운트 값 , 현재요소의 값에 2를 곱한 값 출력
   *  결과 :
   *  0 2 : 반복카운트 0 1 * 2 = 2
   *  0 4 : 반복카운트 1 2 * 2 = 4
   *  0 6 : 반복카운트 1 3 * 2 = 6
   */
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

console.log(doubleArr); // 결과 : [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
// 존재하면 true , 존재하지않으면 false
let arr2 = [1, 3, 5, 7, 9];
let isInclude = arr2.includes(5);
console.log(isInclude); // 결과 : true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 3, 5, 7, 9];
let index = arr3.indexOf(2);
let index2 = arr3.indexOf(3);
console.log(index, index2); // 결과 -1 , 1
// 존재하지 않으면 -1 , 존재하면 해당 존재하는 index의 위치 반환

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드

let arr4 = [2, 4, 6, 1, 3, 4, 7, 9];

const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});
const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex, findedIndex2); // 결과 : 0 , 3
// 조건에 맞는 요소가 없으면 -1 , 조건에 맞는 요소가 존재하면 해당 요소 index의 위치 반환
// 조건에 일치하는 첫번째 요소위치를 반환한다.

/**
 *  findIndex가 왜 필요할까..?
 *  indexof 로 해당 변수가 있는 지 없는지 찾을 수도 있을텐데,
 *  배열에 원시타입이 들어있을 때가 아닌 객체타입을 가지고 있을때는 정확한 값을 가지고 있을때는
 *  잘 찾지 못한다.
 *  why? indexOf 는 얕은 비교로 동작하기 때문 '==='
 */

let objArr = [{ name: "씨오" }, { name: "포도" }, { name: "하다" }];
console.log(objArr.indexOf({ name: "씨오" })); // -1
console.log(objArr.findIndex((item) => item.name === "포도")); // 1

/**
 *  원시타입의 값 : indexOf
 *  객체타입의 값 : findIndex
 */

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 찾은 요소를 그대로 반환한다.

const finded = objArr.find((item) => item.name === "하다");
console.log(finded); // 결과 : {name: '하다'}
