/**
 * 순회란 ?
 *  => 배열,객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말한다.
 */

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // length => 현재의 길이를 저장하는 property
  console.log(arr[i]);
}
/**
 * 결과 :
 * arr[0] => 1
 * arr[1] => 2
 * arr[2] => 3
 */

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
/**
 * 결과 :
 * arr2[0] => 4
 * arr2[1] => 5
 * arr2[2] => 6
 * arr2[3] => 7
 * arr2[4] => 8
 */

// 1-2 for of 반복문
for (let item of arr) {
  // let 변수 of 순회하고자 하는 배열
  // of 뒤에 있는 배열의 값을 하나씩 꺼내서 item변수에 저장
  console.log(item);
}
/**
 * 결과 :
 * 1
 * 2
 * 3
 */

// index를 이용하게 되면 for문 안에서 index를 통한 추가로직을 구현할 수있다.
// for of 는 index를 저장하지않고 배열안에 있는 값들을 순서대로 순회만 한다.

// 2. 객체 순회
let person = {
  name: "율",
  job: "Developer",
  hobby: "Animation Watching",
};

// 2-1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
console.log(keys); // ['name', 'job', 'hobby']

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], person[keys[i]]);
}
/**
 *  결과 :
 *  name 율
 *  job Developer
 *  hobby Animation Watching
 */

for (let key of keys) {
  console.log(key, person[key]);
}
/**
 *  결과 :
 *  name 율
 *  job Developer
 *  hobby Animation Watching
 */

// 2-2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}
/**
 *  결과 :
 *  율
 *  Developer
 *  Animation Watching
 */

// 2-3 for in
for (let key in person) {
  console.log(key);
}
/**
 *  결과 : person 객체의 key 값
 *  name
 *  job
 *  hobby
 */

/**
 *  객체 순회  for in
 *  배열 순회  for of
 */
