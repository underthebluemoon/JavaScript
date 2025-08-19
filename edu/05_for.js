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


for(let i = 1; i <= 5; i++) {
  if(i === 3) {
    continue; // continue 만나면 다음 루프 진행. 증감식으로 감.
  } 
  console.log(i);
}