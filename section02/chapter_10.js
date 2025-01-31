/**
 *  Date
 *  날짜와 시간을 다루는 여러가지 기능을 제공하는 객체
 */

// 1. Date 객체를 생성하는 방법
// 생성자 : new라는 키워드와 함께 새로운 객체를 생성하는 것
let date1 = new Date();
console.log(date1);
// Fri Jan 31 2025 15:24:37 GMT+0900 (한국 표준시)

// 특정일의 Date를 설정하는 방법 ()안에 원하는 날짜 작성
// 특정일 날짜를 작성하는 방법
// let date = new Date(2024, 2, 10, 14, 30, 0); ','로 구분하거나
// let date = new Date("2000-01-27 22:10:10"); 공백으로 구분하거나
// let date = new Date("2000-01-27T22:10:10Z"); 날짜와 시간사이에 T를 작성하여 구분
let date2 = new Date("2000-01-27 22:10:10");
console.log(date2);
// Thu Jan 27 2000 22:10:10 GMT+0900 (한국 표준시)

// 2. 타임 스탬프
// 특정 시간"1970.01.01 00시 00분 00초" 로부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분 00초"
//  => 협정 세계시 (UTC) : 세계의 모든나라가 표준으로 사용하는 시간이 시작되는 지점을 말한다.
let ts1 = date1.getTime();
console.log(ts1); // 1738305118675 : UTC타임으로 부터 해당숫자ms 만큼 지난 시간이 저장되어있다.

// Date 객체 생성하면서 인수로 해당 타임스탬프 값을 전달하게 되면 타임스탬프에 해당하는 시간으로 생성된다.
let date3 = new Date(ts1);
console.log(date3); // Fri Jan 31 2025 15:32:38 GMT+0900 (한국 표준시)

// 3. 시간 요소들을 추출하는 방법
let year = date2.getFullYear();
let month = date2.getMonth();
let date = date2.getDate();

let hour = date2.getHours();
let minute = date2.getMinutes();
let seconds = date2.getSeconds();

console.log(year, month, date, hour, minute, seconds);
// 2000 0 27 22 10 10
// why month는 0으로 나올까?
// => JavaScript의 getMonth()는 월을 0부터 시작 하기 때문
// => 따라서 원하는 월의 값을 얻으려면 + 1 해주어야 한다.

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(3);
date1.setDate(3);
date1.setHours(15);
date1.setMinutes(5);
date1.setSeconds(50);
console.log(date1);
// 결과 : Fri May 03 2024 15:05:50 GMT+0900 (한국 표준시)
// JavaScript에서는 월을 0 부터 시작하므로, setMonth(3)을 하여 4월이 나올 것을 예상하였으나,
// 실제 결과로는 5월(May)가 나왔다. 왜 그럴까?
// ✔ JavaScript의 setMonth()는 월이 0부터 시작 (0 = January, 3 = April)
// ✔ 현재 날짜(Date)가 존재하지 않으면 자동으로 다음 달로 넘어감
// ✔ 안전한 방법 → setDate(1) 후 setMonth() 실행
// ✅ setMonth()를 사용할 때, 날짜가 변경되지 않도록 주의요망망! 🚀

// 5. 시간을 여러 포맷으로 출력하기
console.log(date2.toDateString()); // Thu Jan 27 2000
console.log(date2.toLocaleString()); // 2000. 1. 27. 오후 10:10:10
