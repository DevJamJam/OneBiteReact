/**
 *  배열 요소 조작 메서드 6가지
 */

/**
 *  1. push
 *   배열의 맨 뒤에 새로운 요소를 추가하는 메서드
 *   요소들을 추가 한 다음 변환된 길이의 값을 반환 한다.
 */

let arr1 = [1, 2, 3, 4];
let newLeng = arr1.push("★", "☆");
// 배열이름.push() : 괄호안에 추가할 값 입력 + 여러개일 경우 ','로 구분한다.
console.log(arr1, newLeng); // 결과 : [1, 2, 3, 4, '★', '☆'] 6

/**
 *  2. pop
 *   배열의 맨 뒤에 있는 요소를 제거하고, 반환
 */
let arr2 = [1, 2, 3, 4];
let poppdItem = arr2.pop();
console.log(poppdItem, arr2); // 결과 : 4 [1, 2, 3]
// poppdItem 에는 제거 된 배열요소의 값이 담긴다.

/**
 *  3. shift
 *   배열의 맨 앞에 있는 요소를 제거하고 , 반환
 */
let arr3 = [9, 2, 3, 4];
let shiftItem = arr3.shift();
console.log(shiftItem, arr3); // 결과 : 9 [2, 3, 4]
// shiftItem 에는 제거 된 배열요소의 값이 담긴다.

/**
 *  4. uhshift
 *   배열의 맨 앞에 새로운 요소를 추가한다.
 *   요소들을 추가 한 다음 변환된 길이의 값을 반환 한다.
 */

let arr4 = [1, 2, 3, 4, 5];
// 배열이름.unshift() : 괄호안에 추가할 값 입력 + 여러개일 경우 ','로 구분한다.
let uhshiftItem = arr4.unshift("0", "★");
console.log(uhshiftItem, arr4); // 결과 : 7 ['0', '★', 1, 2, 3, 4, 5]

/**
 *  shift , unshift 는 push, pop 보다 느리게 동작한다.
 *  배열은 맨 앞에 있는 요소를 제거하거나 추가하는 동작이 비효율적
 */

/**
 *  5. slice
 *   배열의 특정 범위를 잘라내서 새로운 배열로 반환 한다. (마치 가위처럼)
 */

let arr5 = [1, 2, 3, 4, 5, 6];
// 배열이름.slice(2,5) 첫번째 인수는 자를 시작점 인덱스 , 두번째 인수는 끝나는 지점 인덱스 + 1
let sliceArr = arr5.slice(2, 5);
console.log(sliceArr); // 결과 : [3, 4, 5]
// slice를 한다해도 원본 배열을 변하지 않는다.
// 만약 두번째 인수를 생략하면 시작점부터 배열의 끝까지 잘라낸다.
// 배열의 뒤에서부터 잘라내고 싶다면?
let sliceArr2 = arr5.slice(-2);
console.log(sliceArr2); // 결과 : [5, 6]

/**
 *  6. concat
 *   두개의 서로 다른 배열을 이어붙여 새로운 배열을 반환
 */

let hada = ["cat", "cute", 9, 15];
let ceo = ["dog", "sweet", 11, 2];
let hadaceo = hada.concat(ceo);
console.log(hadaceo); // ['cat', 'cute', 9, 15, 'dog', 'sweet', 11, 2]
