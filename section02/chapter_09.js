/**
 *  배열 변형 메서드 5가지지
 *  기존의 배열을 변형해서 새로운 배열로로 반환하거나,
 *  또는 문자열로 묶어서 반환하는 등의 기능을 하는 메서드
 */

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 해주는 메서드
let animalArr = [
  { name: "율", cat: "하다" },
  { name: "율", cat: "포도" },
  { name: "진", cat: "나나" },
  { name: "롱", cat: "포도" },
];
// 배열이름.filter()
// 콜백함수를 이용 배열의 모든 요소들을 순회하면서 조건을 만족하는 값들만 새로운 배열로 반환 해준다.
// forEach와 동일하게 현재요소,반복카운트,원본배열을 전달 받는다.
const yulAnimal = animalArr.filter((item) => item.name === "율");
console.log(yulAnimal);
/**
 *  결과 :
 *  [  { name: "율", cat: "하다" },{ name: "율", cat: "포도" }]
 */

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr = [1, 3, 5, 7, 9];
// forEach와 동일하게 현재요소,반복카운트,원본배열을 전달 받는다.
let doubleArr = arr.map((item, idx, arr) => {
  return item * 2;
});
console.log(arr, doubleArr);
// 결과 :
//  [1, 3, 5, 7, 9] : 원본 배열
//  [2, 6, 10, 14, 18] : map 메서드로 얻은 결과 값

// map메소드를 이용하여 cat 값을 묶어서 배열로 추출하는 코드
let animalName = [];
animalArr.map((item) => {
  // cat 중복을 맊기위해 추가로 조건을 넣어서 실행
  if (animalName.includes(item.cat)) {
    return;
  } else {
    animalName.push(item.cat);
  }
});
console.log(animalName);
// 결과 : ['하다', '포도', '나나']
// 위의 if문이 없었을 땐 ['하다','포도','나나','포도']로 출력 되었다.

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 배열을 사전순으로 정렬하는 메서드 이기 때문에 숫자의 대소 비교 X
// 만약 숫자의 대소관계를 기준으로 정렬하고 싶을때는 ? 비교기준을 설정하는 callback 함수 같이 넘겨 주어야 한다.

let arr2 = ["b", "d", "c", "a", "f", 10, 15, 1, 3];
arr2.sort((a, b) => {
  if (a > b) {
    // 오름차순 : b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    // a 가 b 앞에 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr2); // 결과 : ['a', 'b', 'c', 'd', 'f', 1, 3, 10, 15]

// 4. toSorted
// 원본 배열은 놔두고 정렬된 새로운 배열을 반환하는 메서드
// sort와 동일하게 배열을 사전순으로 정렬하지만, 원본 배열을 정렬하는 것이 아니라
// 정렬된 배열을 새롭게 반환하는 메서드 , 가장 최근에 추가된 최신함수다!

let arr3 = ["conan", "doil", "Arthur"];
const sorted = arr3.toSorted();

console.log(arr3, sorted);
// 결과
// ['conan', 'doil', 'Arthur'] : 정렬 안된 상태 그대로
// ['Arthur', 'conan', 'doil'] : 정렬된 결과 저장

// 5. join
// 배열의 모든 요소를 하나의 문자열로 반환하는 메서드
// ()안에 인수로 바꾸고 싶은 구분자를 넣어주면 된다.

let likeArr = ["Arthur", "Conan", "Doil", "Shorck", "Home's"];
const joined = likeArr.join();
const joinedSeparator = likeArr.join("");
const joinedSeparator2 = likeArr.join("-");
console.log(joined, joinedSeparator, joinedSeparator2);
// 결과 :
// Arthur,Conan,Doil,Shorck,Home's  : ','는 separator 구분자로 변경가능하다.
// ArthurConanDoilShorckHome's :구분자를 "" 으로 했을때
// Arthur-Conan-Doil-Shorck-Home's 구분자를 "-"으로 했을때
