/**
 *  구조 분해 할당
 *  배열이나 객체에 저장된 여러개의 값들을 분해해서 각각 다른 변수에 할당하는 것
 */

// 1. 배열 구조 분해 할당
let arr = [10, 25, 11, 2, 9, 15];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 위의 방식으로 배열의 요소를 할당하는 것은 매번 배열의 이름을 적어주어야 하고 불편하다

let [one, two, three, four, five, six, seven] = arr;
// 배열의 원수의 갯수를 초과해서 할당할 경우 undefined 저장된다.
// 혹시나 값이 모자랄 상황을 대비해서 기본값 설정도 가능하다
// ex. let [one, two, three, four, five, six, seven = 7] = arr;
console.log(one, two, three, four, five, six, seven); // 10 25 11 2 9 15 undefined

// 2. 객체의 구조 분해 할당
let person = {
  name: "율",
  job: "Developer",
  hobby: "Animation Watching",
};
let { name: myName, job: myJob, hobby, extra } = person;
// 객체는 {} 중괄호 사용 하여 구조 분해 할당
// 객체의 property를 key값을 기준으로 저장할 수 있다.
// 없는 key값을 입력할 경우 배열과 동일하게 undefined 저장되며
// 기본값 설정도 배열의 구조분해할당과 동일하다
// 할당받는 변수명 변경이 가능하다.
// key값 뒤에 ':'을 붙이고 변수명 변경 가능
console.log(myName, myJob, hobby, extra); // 율 Developer Animation Watching

// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수를 받는 방법
const func = ({ name, job, hobby, extra }) => {
  console.log(name, job, hobby, extra); // 율 Developer Animation Watching undefined
};
func(person);
// 객체를 넘겼을때만 사용 가능
// {} 중괄호 사용해서 구조분해 할당인 것을 명시해주어야 한다.
