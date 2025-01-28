/**
 *  함수
 *  중복으로 작성되는 유사한 기능을 하는 코드들이 있을경우
 *  동일한 기능을 일일히 타이핑 해야하고, 향후 코드 수정에 문제가 될 수 있다.
 *  이를 해결하기 위한 것이 함수
 *  자바스크립트에서는 함수안에 함수를 만들 수 있다 (중첩함수)
 *  타 언어와 다르게 함수 선언이 호출보다 하단에 있을 수 있다
 *  => 호이스팅 : 끌어올리다 라는 뜻
 */

// 함수선언 : 함수를 새롭게 만드는 행위
function greeting() {
  console.log("안녕하세요 ! ");
}

// 함수호출 : 함수호출시엔 반드시 소괄호 () 붙여주어야 한다.
greeting();

// 직사각형 넓이 구하는 함수
function getArea(width, height) {
  // 순서대로 전달 받는 값 : 매개변수
  let area = width * height;
  function another() {
    // 중첩함수
    console.log("another");
  }
  another();
  return area; // 반환하는 값 : 반환 값, return 이후에 함수는 종료 된다.
  //   console.log(`넓이는 : ${area}`);
}

getArea(25, 20); // 25,20 처럼 함수에 전달하는 값 : 인수

let area1 = getArea(35, 20);
console.log("반환 받은 값은 ? : ", area1); // 반환 받은 값은 ? :  700
