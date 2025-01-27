/**
 *  조건문 이란?
 *  특정 조건을 만족했을 때만 실행되는 코드를 작성하기 위한 문법
 *  대표적으로 if, switch문법이 존재한다.
 */

let num = 15;

// if문
// if 로 시작해서 else로 끝나야 한다.
// else 는 항상 마지막에 작성 else if 보다 위에 작성 X

if (num >= 20) {
  // if 키워드 입력 ()소괄호 안에 조건식을 작성 {}대괄호 안에 수행할 코드를 작성
  console.log("num이 20이상 입니다.");
} else if (num === 15) {
  // else if : if의 조건이 거짓일 때 추가적으로 조건을 또 걸 수 있다.
  // else if의 갯수에는 제한이 없다.
  console.log(`${num} === 15 입니다.`);
} else {
  // else 조건이 거짓일때 실행 되는 코드 작성
  console.log(`해당숫자 ${num} = 20보다 작습니다`);
}

// switch문
// if문과 기능자체는 동일하다
// 다수의 조건을 처리할 때 if보다 더 직관적이다

let animal = "cat";

switch (animal) {
  //switch 키워드 입력 ()소괄호 안에 변수입력
  // 소괄호 안에 있는 변수명과 일치하는 값의 case를 탐색
  // 일치하는 케이스 만나게 되면 그 하단의 모든 케이스를 다 출력하게 된다.
  // 일치하는 케이스의 경우만 출력하게 하려면 case 문 끝에 break 달아줘야 한다.
  case "cat": {
    console.log("고양이");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  default: {
    // case와 아무것도 일치하지 않을 경우 실행
    console.log("그런 동물은 몰라요");
  }
}

/**
 * 어떠한 변수의 값을 기준으로 각각 다른 코드를 실행 시키고 싶을 경우 : switch문
 * 복잡한 여러개의 조건을 이용하고 싶을 경우 : if문
 */
