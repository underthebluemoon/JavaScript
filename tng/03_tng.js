// let score = 79;
// let grade
// if(score === 100) {
//   grade = 'A+';
// } else if(score < 100 && score >= 90) {
//   grade = 'A';
// } else if(score < 90 && score >= 80) {
//   grade = 'B';
// } else if(score < 80 && score >= 70) {
//   grade = 'C';
// } else if(score < 70 && score >= 60) {
//   grade = 'D';
// } else if(score < 60) {
//   grade = 'F';
// }
// console.log( `"당신의 점수는 ${score}점 입니다. <${grade}>"` )
// console.log( '"당신의 점수는' .concat(score, '점 입니다. <', grade, '>"') )
// console.log('"당신의 점수는 ' + score + '점 입니다. <' + grade + '>"')

let score = 89;
let grade = 'F';

if(score > 100 || score < 0) {
  console.log('잘못된 값입니다.');
} 
else {
  if(score === 100) {
    grade = 'A+';
  } else if(score >= 90) {
    grade = 'A';
  } else if(score >= 80) {
    grade = 'B';
  } else if(score >= 70) {
    grade = 'C';
  } else if(score >= 60) {
    grade = 'D';
  }
  console.log('당신의 점수는 ' + score + '점 입니다. <' + grade + '>');
  console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`);
}