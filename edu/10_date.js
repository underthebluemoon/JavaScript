// Date 객체
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작
const now0 = new Date();
console.log(now0.getTime()); // 현재 유닉스 타임스태프

// Date 인스턴스
const  now = new Date();  
      // new : keyword, arg 미입력시 현재 시간
console.log(now);
const date1 = new Date('1990=2-23 14:30:00'); // 주로 사용
console.log(date1);
const date2 = new Date (1980, 10, 10, 23, 0, 1);
                        // month : 0~11로. 
console.log(date2);
const date3 = new Date (48948654); // 거의 사용안 함
console.log(date3);

// getFullYear() : 연도 반환
const nowYear = now.getFullYear();
console.log(nowYear);

// getMonth() : 월 반환, (**주의** : 0~11로 반환)
const nowMonth = now.getMonth() + 1;
console.log(nowMonth);

// getDate() : 일 반환
const nowDate = now.getDate();
console.log(nowDate);

// getHours() : 시간 반환
const nowHours = now.getHours();
console.log(nowHours);

// getMinutes() : 분 반환
const nowMinutes = now.getMinutes();
console.log(nowMinutes);

// getSeconds() : 초 반환
const nowSeconds = now.getSeconds();
console.log(nowSeconds);

// getMilliseconds() : 밀리 초 반환
const nowMilliseconds = now.getMilliseconds();
console.log(nowMilliseconds);

// getDay() : 요일 반환 (**주의**: 0~6반환, 0 = 일요일)
const nowDay = now.getDay();
console.log(nowDay);

// 요일 한글로 변환
let koreanDay = '';
switch(nowDay) {
  case 0:
    koreanDay = '일요일';
    break;
  case 1: 
    koreanDay = '월요일';
    break;
  case 2:
    koreanDay = '화요일';
    break;
  case 3: 
    koreanDay = '수요일';
    break;
  case 4:
    koreanDay = '목요일';
    break;
  case 5: 
    koreanDay = '금요일';
    break;
  case 6:
    koreanDay = '토요일';
    break;
}

// xxxx년 xx월 xx일 xx:xx:xx 금요일
const nowFormat = `${nowYear}년${lpad(nowMonth, 2, '0')}월${lpad(nowDate, 2, '0')}일 ${lpad(nowHours, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat);
console.log(typeof(nowYear)), typeof(nowYear.toString()), typeof(String(nowYear));
//                number                      string으로 변환 하는 두가지 방법
console.log(nowMonth.toString().padStart(2, '0'));
                      //string 타입으로 변환한  //왼쪽에 글자 추가(최대 2글자, 빈자리에 '0')


function lpad(origin, length, fillStr){
    // parameter들 -> origin : 원본 데이터, length : 목표 길이, fillStr : 채울 문자
    if(typeof(origin) === 'number') {
      origin = origin.toString();
      // origin의 타입이 number면 string으로 변환
    }
  return  origin.padStart(length, fillStr)
}

// 두 날짜의 차이를 구하는 방법
const targetDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(targetDate - now) / (1000 * 60 * 60 * 24));
                        // 타겟 날짜 - 현재 날짜     // 일단위 1000 * 60 * 60 * 24
                        // abs 로 절대값 처리
                        // 1000 * 60 * 60 * 24 로 나누어서 하루 단위로 나눔
                        // floor로 나눠서 차일 계산
console.log(diff)