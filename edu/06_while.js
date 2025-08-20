// 조건문만 사용. false가 되거나 조건에 break가 되게 끔 설계 필요!

// let cnt = 0;

// while(cnt < 3) {
//   console.log(cnt);
//   cnt++;
//   // console.log('while문 시작');

//   if(cnt >= 3) {
//     break;
//   }
//   // console.log('while문 끝');

// }

// let dan = 2;
// let i = 1;
// while(i < 10) {
//   console.log(`${dan} X ${i} = ${dan * i}`);
//   i++;
// }

// let dan1 = 2;
// while(dan1 < 10) {
//   let i1 = 1;
//   while(i1 < 10) {
//     console.log(`${dan1} X ${i1} = ${dan1 * i1}`)
//     i1++;
//   }
//   dan1++;
// }

// let multiplier = 1;
// while(multiplier < 1) {
//   console.log(`2 X ${multiplier} = ${2 * multiplier}`);
//   multiplier++;
// }

// do-wihle문
// 실행먼저 -> 조건체크

let multiplier = 1;
do {
  console.log(`2 X ${multiplier} = ${2 * multiplier}`);
  multiplier++;
} while(multiplier < 10);