// switch 문
// 완전 비교시 사용. if문으로 대체 가능.
let food = '돈까스';
let foodKinds = ''; // 정해지지 않은 빈 문자열 표시

switch(food) {
  case '돈까스':
    foodKinds = '경양식';
    break; // 해당되는 경우, switch문에서 빠져나옴
  case '김치지개':
    foodKinds = '한식';
    break;
  case '초밥':
    foodKinds = '일식';
    break;
  default :
    foodKinds = '기타';
    break; // 마지막엔 break 불필요, 관습적으로 작성
}

// if(food === '돈까스') {
//   foodKinds = '경양식';
// } else if(food === '김치찌개') {
//   foodKinds = '한식';
// } else if(food === '초밥') {
//   foodKinds = '일식';
// } else {
//   foodKinds = '기타';
// }
