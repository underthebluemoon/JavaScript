
// *****
// *****
// *****
// *****
// *****


// for(let rotation = 1; rotation <= 5; rotation++ ) {
//   console.log("*****");
// }

// for(let i = 0; i < 5; i++) {
//   console.log('*****');
// }

// let star = '*';
// let makedStar = '';
// let outRotation = 0;
// let rotation = 0;
// let maxRotation = 5;

// for(outRotation; outRotation < maxRotation ; outRotation++) {
//   for(rotation; rotation < maxRotation ; rotation++ ) {
//     makedStar += star;
//   }
//   console.log(makedStar);
// }

// let star = '*';

// for (let i = 0; i < 5; i++) {
//   let makedStar = ''; // 초기화 + 선언 동시에

//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
    
//   }
//   console.log(makedStar);
// }

// let star = '*';
// let makedStar = '';
// let rotation = 0;
// let maxRotation = 5;

// for(rotation; rotation < maxRotation ; rotation++ ) {
//   makedStar += star;
//   console.log(makedStar);
// }


// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   let makedStar = '';
//   for(let starCnt = 0; starCnt <= lineCnt; starCnt++) {
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }

let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt --) {
  makedStar += '*';
  let makedSpace = '';

  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}


// let star1 = '*';
// let empty = ` `;
// let makedStar1 = '';
// let rotation1 = 0;
// let maxRotation1 = 5;

// console.log(empty + empty + star1);

// for(rotation1; rotation1 < maxRotation1; rotation1++ ) {
//   empty += empty
// }
// for(let rotation2 = 5; rotation2 >= 0; rotation2-- ) {
//   makedStar1 += star1
//   console.log(empty)
// }



// let j = 0;
// let z= 4;
// for(let i = 5; i > 0; i--) {
//   let stars2 = '';

//   for(j; j < i; j++) {
//     stars2 += ` `;
//   }
//     for(z; z <= j; z--) {
//     stars2 += '*';
// }
//   console.log(stars2)
// }