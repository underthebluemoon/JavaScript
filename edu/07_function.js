// 함수 (function)
// 입력을 받아 출력을 하는 일련의 과정을 정의한 것

// 함수 선언식 : functio func이름(paramA, paramB) { 함수 식 }
// 매개변수 (parameter) : 외부로부터 입력받은 값을 저장하는 변수
    // 파라미터 위치에 있는 것으로 선언. 선언 키워드 불필요. 재할당 하지 않도록 주의! 
function fnc1(a, b) {
  return a + b;
  // return : 옆에 적힌 값을 반환하면서 함수 종료 ≑ break 키워드
  // return 이 필수는 아님
  // return 값이 void : 출력값이 없는 함수
}

function fnc2() {
      // 파라미터 갯수 제한 없음. 단순히 function 값만 불러들일 수 있음.
  return 1000*60;
}

// 인수 (argument) : 함수를 호출 할 때 전달해주는 값
    // 파라미터 순서에 맞게 들어감. 즉, 1은 a에, 2는 b에 들어감
let resultFnc1 = fnc1(1, 2); 
console.log(resultFnc1);

console.log(fnc1(2, 3));

// 함수 선언식 : 호이스팅에 영향을 받는다.
// 재할당이 가능하므로, 함수명이 중복되지 않도록 조심해야한다.
function fnc3(a, b) {
  return a + b;
}
function fnc3(a, b) {
  return a + b - 9999;
}
// 아래에 재할당 된 함수로 덮어 씌워짐!
console.log(fnc3(1,2));

// 함수 표현식 : 호이스팅에 영향을 받지 않는다.
// 재할당이 불가능 (const)
// fnc4(1, 3); //referenceError
// const fnc4 = function(a, b) {
//   return a + b;
// }

// 화살표 함수 :
const fnc5 = (a, b) => a + b;
                    // 중괄호 생략시, return 생략 가능
const fnc6 = (a) => {
  let test = a / 2;
  return test; 
}
const fnc7 = a => {
            // 파라미터의 ()도 생략 가능
  let test = a / 2;
  return test; 
}
const fnc8 = () => {
            // 파라미터가 없을 경우, () 생략 불가
  let test = 2;
  return test; 
}

let obj1 = {age:20};
let obj2 = obj1;         // obj2에 obj1의 값을 대입
console.log(obj1, obj2);
obj2.age = 30;           // obj2의 값만 수정 해도 (obj1 값은 건드리지 않음)
console.log(obj1, obj2); // obj1의 값이 같이 변경됨


// 콜백(call back) 함수
// 다른 함수의 파라미터로 전달되어서 특정 조건에 따라 호출되는 함수 : argument가 함수
functon myChk(callback) {
  callback();
}
const test11 = () => console.log('콜백함수')
myChk(test11);
      // 이름이 없는 함수 : 단발성
      // argument로 함수 `() => console.log('콜백함수')`를 입력

