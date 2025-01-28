/**
 *  Spread 연산자와 Rest 매개변수
 */

// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
// 해당 연산자를 사용하면 객체나 배열의 값을 간편하게 흩뿌릴 수 있다

let arr1 = [10, 25, 15];
let arr2 = [4, arr1[0], arr1[1], arr1[2]];
console.log(arr1); // [10, 25, 15]
console.log(arr2); // [4, 10, 25, 15]

// 귀찮을 뿐더러 위험하기도 하다.
// 배열의 원소가 추가될 수도 혹은 삭제될 수도 있기 때문
// 스프레드 연산자 사용 '...'+배열
let arr3 = [...arr1, 404, 1025, 1102, 915];
console.log(arr3); // [10, 25, 15, 404, 1025, 1102, 915]

let animalObj = {
  cat1: "Hada",
  cat2: "NaNa",
  dog1: "Ceo",
};

// 객체에서도 스프레드 연산자 사용 가능 '...' + 객체
let animalObj2 = {
  ...animalObj,
  cat3: "Podo",
};

console.log(animalObj, animalObj2);
// {cat1: 'Hada', cat2: 'NaNa', dog1: 'Ceo'}
// {cat1: 'Hada', cat2: 'NaNa', dog1: 'Ceo', cat3: 'Podo'}

function funcNumber(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcNumber(...arr1); // 10 25 15

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// 여러개의 매개변수를 받아야 할때 배열형태로 한방에 매개변수를 받아올 수 있도록 해주는 문법

function restNumber(one, two, ...rest) {
  // 첫번째 인수는 one에 두번째 인수는 two에 나머지는 rest에 배열로 저장하는 코드
  // 첫번째 인수 두번째 인수 따로 지정할 필요없이 만약 한번에 받아도 될 경우엔 ?
  // => ...rest 라고만 써도 된다.
  // ...rest 뒤에는 추가적인 매개변수가 올 수 없다.
  // 앞에 ...만 붙으면 이름은 아무거나 해도 상관없다.
  // ex) ...args , ...num 등 가능
  console.log(one, two);
  console.log(rest);
}

// 함수의 매개변수를 정의하는 '()' 소괄호 안에 정의된 '...'은 Rest 매개변수이다.
// Spread가 아니다 ! 꼭 비교해서 알아둬야 한다.

restNumber(...arr3);
// 10 25
// [15, 404, 1025, 1102, 915]
