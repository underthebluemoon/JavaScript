// For 문

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for(let i = 1; i <= 5; i++) {
//   // 초기값; 조건식 (true:반복. { } 실행, false:멈춤. false값 필수); 증감식 실행
//   console.log(i);
//   if(i >= 3) {
//     break; // break 만나는 순간 루프에서 빠져나옴. console 위치 지정시 참고 할 것.
//   } 
// }


// for(let i = 1; i <= 5; i++) {
//   if(i === 3) {
//     continue; // continue 만나면 다음 루프 진행. 증감식으로 감.
//   } 
//   console.log(i);
// }


// 다중루프
// let i = 0;
// let z = 0; 
// // z의 값이 유지되므로 안쪽 루프는 바깥쪽 0번째에만 루프
// for(i; i < 3; i++) {
//   console.log(`바깥쪽 루프 : ${i}번째`);

//   for(z; z < 3; z++) {
//     // 블록 안에서의 값은 블록을 빠져나가면서 초기화 되므로 매 회차 3회 루프
//     console.log(`안쪽 루프 : ${z}번째`);
//   }
// }


// 구구단 2단
// let dan = 2;
// for(let i = 1; i <=9; i++) {
//  console.log(`${dan} X ${i} = ${dan*i}`);
// }
// 구구단 2단~9단
let startDan = 2;
let startMultiplier = 1;
let maxDan = 9;

for(let dan = startDan; dan <= maxDan; dan++) {
  console.log(`** ${dan}단 **`);

  for(let multiPlier = startMultiplier; multiPlier <= maxDan; multiPlier++) {
    console.log(`${dan} X ${multiPlier} = ${dan * multiPlier}`);
  }
}