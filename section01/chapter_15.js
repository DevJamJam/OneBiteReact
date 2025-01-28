/**
 *  객체
 *  원시타입이 아닌 객체 타입의 자료형
 *  여러가지 값을 동시에 저장할 수 있는 자료형을 의미
 *
 *  객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이하다.
 */

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 방식 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value
// 프로퍼티 갯수 제한 X
let person = {
  name: "유리",
  age: 36,
  hobby: "Animation Watching",
  job: "Developer",
  animal: {
    cat: "Hada",
    dog: "Ceo",
  },
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1 특정 프로퍼티에 접근 ( 점 표기법, 괄호 표기법)

//점 표기법
let name = person.name;
console.log(name); // 유리
// 존재하지 않는 프로퍼티에 접근하려 하면? undefined 반환

// 괄호 표기법 , 동적으로 프로터피 접근할때 유용하다.
let animal = person["animal"];
console.log(animal); // {cat: 'Hada', dog: 'Ceo'}

// 변수에 접근하고자 하는 키값을 담아서 꺼내올 수도 있다.
let property = "hobby";
let hobby = person[property];
console.log(hobby); // Animation Watching

// 3-2 새로운 프로퍼티를 추가하는 방법
person.food = "피자";
person["favoriteFood"] = "고기";
console.log(person);
/**
 * age : 36
 * animal: {cat: 'Hada', dog: 'Ceo'}
 * favoriteFood: "고기"
 * food: "피자"
 * hobby: "Animation Watching"
 * job: "Developer"
 * like cat: true
 * name: "유리"
 */

// 3-3 프로퍼티를 수정하는 방법
person.job = "Developer & Student";
person["food"] = "햄버거";
console.log(person);
/**
 * age : 36
 * animal: {cat: 'Hada', dog: 'Ceo'}
 * favoriteFood: "고기"
 * food: "햄버거"
 * hobby: "Animation Watching"
 * job: "Developer & Student"
 * like cat: true
 * name: "유리"
 */

// 3-4 프로퍼티를 삭제하는 방법
delete person.food;
delete person["age"];
console.log(person);
/**
 * animal: {cat: 'Hada', dog: 'Ceo'}
 * favoriteFood: "고기"
 * hobby: "Animation Watching"
 * job: "Developer & Student"
 * like cat: true
 * name: "유리"
 */

// 3-5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
// 왼쪽문자열에 해당하는 프로퍼티가 오른쪽에 있는 객체안에 있는지 없는지
// 존재하면 true , 존재하지 않으면 false
let result2 = "food" in person;

console.log(result1, result2); // true, false
