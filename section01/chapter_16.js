// 1. 상수객체 : 엄밀히 말하면 새로운 값을 할당하지 못하는 것을 말한다.
// 아예 새로운 값을 할당하는 것은 문제가 되지만, 프로퍼티를 추가 수정 삭제는 가능하다.
const animal = {
  type: "강아지",
  name: "씨오",
  color: "White",
};

//animal = { a: 1 }; // chapter_16.js:8 Uncaught TypeError: Assignment to constant variable.
animal.age = 2; // 추가
animal.type = "강아지_말티숑"; // 수정
delete animal.color; // 삭제
console.log(animal);
/**
 * age: 2
 * name: "씨오"
 * type: "강아지_말티숑"
 */

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말한다.

const person = {
  name: "유리",
  // 메서드 선언
  sayHi() {
    console.log("Hello~");
  },
};
person.sayHi(); // Hello~
person[sayHi](); // Hello~
