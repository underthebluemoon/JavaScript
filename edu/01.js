// 변수 : 변하는 데이터를 저장하기 위한 공간
// var name = : 사용 지양할 것 | let name =
// `=` : 대입 연산자
var var1 = '제육';
let let1 = '햄버거';
// 변수의 선언 : 선언 키워드를 사용해 변수 이름 지정
var var2;
// 변수의 초기화 : 변수에 최초의 값 세팅, 변수를 디폴트 값으로 초기화
var2 = 0;

// 상수 : 최초에 대입한 값이 절대 변하지 않는 공간
// 변수의 경우, 값을 저장한 뒤 다시 값을 넣어서 변경이 가능하나,
// 상수의 경우, 값을 저장한 후는 다시 값을 넣어서 변경이 불가능
// 설정값 등, 변하면 안 되는 값을 저장할 때 사용 
const const1 ='뚝불';
// const1 = 'asd';

// ---------------------
// var를 지양해야하는 이유
// ---------------------
// 1. var는 중복선언이 가능하다
var name = '홍길동';
var name = '갑돌이';
// let name2 = '둘리';
// let name2 = '도우너';

// 2. 작성한 코드 순서 상, 선언보다 사용을 먼저 할 경우, 오류가 발생하지 않고 접근 가능한 현상
// 호이스팅
console.log(age);
var age = 20;

// 3. var는 기본적으로 함수레벨 스코프
// 스코프의 종류 : 전역 스코프, 지역 스코프, 블록레벨 스코프
// 전역 스코프 : 어디서든 접근 가능
// 지역레벨 스코프 : 함수. function, {}
// 블록레벨 스코프 : {}

// global scope
var globalVar = 'globalVar';
var globalLet = 'globalLet';
const globalConst =  'globalConst';

function test() {
  // local scope
  var localVar = 'localVar';
  var localLet = 'localLet';
  const localConst =  'localConst';

  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);

  console.log(localVar);
  console.log(localLet);
  console.log(localConst);
}

test();

// global scope 이므로 function 밖에서 출력 됨
// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// local scope 이므로 local을 벗어나면 접근이 되지 않음. 출력 안 됨
// console.log(localVar);
// console.log(localLet);
// console.log(localConst);

// block scope
if(true) {
  var blockVar = "blockVar"
  let blockLet = "blockLet"
  const blockConst = "blockConst"
}

// block scope 이므로 referenceError.
// but, var는 출력 되고, let과 const는 출력 안 됨
// var는 함수레벨 스코프, let과 const는 블럭레벨 스코프이기 때문
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);
