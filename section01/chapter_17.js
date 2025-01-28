/**
 *  배열
 *  여러개의 값을 순차적으로 담을 수 있는 자료형
 */

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [
  1,
  2,
  3,
  true,
  false,
  null,
  undefined,
  () => {
    console.log("hello");
  },
];
console.log(arrC);
/**
 * [ 1,2,3,true,false,null,undefined,f]
 * 0: 1
 * 1: 2
 * 2: 3
 * 3: true
 * 4: false
 * 5: null
 * 6: undefined
 * 7: () => { console.log("hello"); }
 */

// 2. 배열 요소 접근 : 배열 index 는 0부터 시작작
let item1 = arrC[0];
console.log(item1);
let item2 = arrC[7];
item2(); // hello

arrC[1] = "JS";
console.log(arrC);
/**
 * [ 1,"JS",3,true,false,null,undefined,f]
 * 0: 1
 * 1: "JS"
 * 2: 3
 * 3: true
 * 4: false
 * 5: null
 * 6: undefined
 * 7: () => { console.log("hello"); }
 */
