/* 
[평균 성적 출력하기]
목표: 학생들의 평균 성적을 출력합니다.

다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요

- 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
- 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.
  - `"{이름}: {평균}"` 형태로 출력합니다.

*/

function printAvgScore(students) {
  // 여기에 코드를 작성하세요 ...
  for (let name in students) {
    // key 값을 name 변수에 할당

    let sum = 0;
    const { scores } = students[name]; // 구조 분해 할당으로 scores 속성 값만 빼온다
    for (let score of scores) {
      sum += score;
    }
    // sum 에는 각 scores의 값이 순차적으로 더해져서 더해진다.
    const average = sum / scores.length; // 평균을 구하기 위해 scores의 length만큼 나눈다.
    console.log(`${name} : ${average}`); // 최종 값 출력
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58
