// 산술연산자
let num1 =5;
let num2= 10;

console.log(num1 + num2); //더하기
console.log(num1 - num2); //빼기
console.log(num1 * num2); //곱하기
console.log(num1 / num2); //나누기
console.log(num1 % num2); //나누기후 나머지

// 문자열 연결 연산자
let firstName = '길동';
let lastName = '홍';
console.log(lastName + firstName);
// + 는 더하기, 문자열 연결 기능
console.log(lastName.concat(firstName));
// concat 은 문자열 연결 기능

// 산술 대입연산자
let num3 = 0;
// num3 = num3 + num1;
// 0 + 5 = num3 -> num3은 5로 기존값 업데이트
num3 += num1;
console.log(num3);
// num3=num3+num1 -> num3=5
num3 -= num1;
console.log(num3);
// num3=num3-num1 -> num3=0
num3 *= num1;
console.log(num3);
// num3=num3*num1 -> num3=0
num3 /= num1;
console.log(num3);
// num3=num3/num1 -> num3=0
num3 %= num1;
console.log(num3);
// num3=num3/num1 -> num3=0

// (전위|후위)증감 연산자
let num4 = 0;
num4--;
// 값은 출력되지 않지만, num4 값에 -1
console.log(--num4);
//  전위 pre. -1 후 num4 값 출력
console.log(num4++);
//  후위 증감 연산자. num4 값 출력 먼저 출력 후 +1

// 비교 연산자
let num5 = 1;
let num6 = 2;
console.log(num5 > num6);
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);
// 같다 : ==(불완전비교. 데이터 타입 체크 x), ===(완전비교. 데이터 타입 체크 o)
// 같지 않다 : !=(불완전비교), !==(완전비교)
console.log(1 == '1');
console.log(1 != '1');
console.log(1 === '1');
console.log(1 !== '1');

// 논리 연산자
console.log((1 === 1) && (1 === 0));
// 모두 true 일때만 true, 하나라도 true가 아닐경우 false
console.log((1 === 1) || (1 === 0));
// 하나라도 true 라면 true, 모두 false인 경우 false
console.log(!(1 === 1));
// 결과값이 반대로 나옴. true -> false, false->true

// 삼항 연산자
// 조건식 ? 참일 경우 처리 : 거짓일 경우 처리
let rank = 3;
let result = rank <= 2 ? '통과' : '거부';
// result의 값은 rank가 2보다 작거나 같을 경우 '통과' 그렇지 못할 경우 '거부'
console.log(result);