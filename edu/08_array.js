// Object??
const obj1 = {  // object는 주로 const로 선언
  // key - value 쌍으로 작성
  id: 1,  // 데이터 들의 구분자 ','
  name : '홍길동'
  ,gender: '남자'  // ','위치는 데이터의 앞/뒤 상관 없음!
  ,age: 20  // 마지막 데이터의 구분자는 필요 없으나, 있어도 정상작동. (대부분의 언어는 비허용)
  // id, name, gender, age 등 key : property key
  // value : property value
  // property : property key + property value 
  ,fnc1: (a, b) => a + b
  // fnc 같은 함수 : method
};
console.log(obj1.fnc1(1,2));

const obj2 = {
  title: '홍길동이 쓴 글이다.'
  , userInfo: obj1 // 객체 중복. 아래와 같이 작성해도 됨!
//, userInfo: {
//    id: 1
//    , name : '홍길동'
//    , gender: '남자'
//    , age: 20 
//    ,fnc1: (a, b) => a + b
//  }
}
// obj2 = {}; → object 자체를 변경하는 것은 불가능 (const)
obj2.userInfo.name = '갑순이'; 
// → object 안의 데이터 일부를 변경하는 것은 가능
console.log(obj2.userInfo.name);

// Optional Chaining (ECMA 2022 추가)

// obj2.userInfo.rank; 
// 없는 값이지만, Error 미발생 : undefined
// obj2.userInfo.rank.test;
// Error 발생 : 없는 접근 경로

if(obj2.userInfo.rank) {
  obj2.userInfo.rank.test;
  // 위의 값이 존재한다면 접근한다
}
  // '?.'를 기준으로 앞의 평가대상이 
  // undefined || null 이 아니면 처리를 계속 이어가고
  // undefined || null 이면 false를 반환하고 멈춘다
obj2.userInfo.rank?.test;

//typescript 개인공부!


//------------
// Array 객체
//------------
// 하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조
// 여러 종류의 데이터 타입을 저장 가능 cf. 자료구조론: 동일 데이터만 저장 가능
// 배열의 길이는 동적으로 변화 cf. 자료구조론: 배열의 길이는 변경 불가
// 각 요소(각 방)는 0부터 시작하는 인덱스를 가진다
// 참조형
const arr1 = [1, 2, '홍길동', 'obj1', 5];

console.log(arr1[3]); //인덱스 번호로 정보를 불러옴

const arr2 = [
  [1, 2, 3]
  ,[4, 5, [20, 30, 40]]
  ,[7, 8, 9]
]
console.log(arr2[2][2]); // 9 출력을 위해
console.log(arr2[1][2][2]); // 40 출력을 위해

// 배열 복사
// spread Operator 문법
const arr3 = [...arr2]; // 원본은 그대로 두고 카피본 만들기(deep copy). 그냥 복사했다간 카피본 수정이 원본에 수정됨(shallow copy)
arr3[0] = [10, 20, 30]; // 배열 []
console.log(arr3);
const obj3 = {...obj1}; // 객체 {} 

// length : 배열의 길이 반환
console.log(arr1.length);


// isArrary(arg) : 배열인지 아닌지 여부를 boolean 체크
console.log(Array.isArray(arr1));  // 배열이 맞으니 true
console.log(Array.isArray(1));     // 배열이 아니니 false

// indexOf(searchElement) : 배열에서 특정 요소를 검색해서 인덱스를 반환
const arr4 = [1, 2, '홍길동', 4, 5];
console.log(arr4.indexOf(4));  // 3 반환
console.log(arr4.indexOf('홍길동'));  // 2 반환
console.log(arr4.indexOf('갑순이'));  // -1 반환 : 없는 값

// includes(searchElement) : 특정 요소의 존재여부 확인, boolean 반환
console.log(arr4.includes('홍길동'));  // true 반환
console.log(arr4.includes('갑순이'));  // false : 없는 값

if(arr4.indexOf('홍길동') > -1) {
  // indexOf의 경우 if() 사용해서 true/false 값 얻을 수 있음
}

// push(...argument) : '원본' 배열에 마지막 요소를 추가하고, 바뀐length 반환
const resultLength = arr4.push(100); // [1, 2, '홍길동', 4, 5, 100]
console.log(resultLength, arr4);

// concat(...args) : 배열의 마지막 요소를 추가한 '새로운' 배열을 반환
const arr5 = [1, 2, 3];
const resultConcat = arr5.concat(4, 5);
console.log(arr5, resultConcat);

// pop() : '원본' 배열의 마지막 요소를 제거하고, 제거한 요소를 반환
const arr6 = [1, 2, 3];
const resultPop = arr6.pop(); // resultPop(arr6.pop())은 마지막 요소인 '3'
console.log(arr6, resultPop); // 마지막 요소가 제거된 arr6, 마지막 요소인 3 반환

// unshift(...args) : 원본 배열의 첫번째 요소를 추가, 변경된 length를 반환
const arr7 = [1, 2];
const resultUnshift = arr7.unshift(2, 3, 4);
console.log(arr7, resultUnshift);  // 추가된 배열 [2, 3, 4, 1, 2], 총 길이 5 반환

// shift() : 원본 배열의 첫번째 요소를 제거하고, 제거된 요소를 반환
const resultShift = arr7.shift();
console.log(arr7, resultShift);  // 맨 앞 값이 제거된 [3, 4, 1, 2], 제거된 요소인 2 반환

// splice(start, count, ...arg) : 원본에서 특정 요소를 자른다
const arr8 = [1, 2, 3, 4, 5, 6];
// start만 전달했을 때
  // start가 양수일 경우, 인덱스가 satrt인 요소부터 모두 제거하고 잘린 요소를 배열을 반환
  const resultSpliceStartPositive = arr8.splice(3);  // 인덱스 3부터 [4, 5, 6] 잘라냄
  console.log(arr8, resultSpliceStartPositive);  // 잘리고 남은 [1, 2, 3], 잘린 [4, 5, 6] 반환
  // start가 음수일 경우, 배열의 끝 요소부터 start만큼의 요소를 제거하고 잘린 요소를 배열을 반환
  const arr9 = [1, 2, 3, 4, 5];
  const resultSpliceStartNegative = arr9.splice(-3);  // 끝부터 3개 잘림 [3, 4, 5]
  console.log(arr9, resultSpliceStartNegative);  // 잘리고 남은 [1, 2], 잘린 [3, 4, 5] 반환
// start와 count만 전달할 경우
  // start로 삭제 할 배열의 인덱스를 전달, count로 삭제할 배열의 개수 전달
  const arr10 = [1, 2, 3, 4, 5];
  const resultSpliceCount = arr10.splice(2, 1); 
  console.log(arr10, resultSpliceCount);  // 삭제하고 남은 arr10 [1, 2, 4, 5], 삭제된 배열 [3]
// start, count, ...args 모두 전달할 경우
  // start로 삭제시작 할 배열의 인덱스, count로 삭제할 배열의 개수, 삭제한 배열 대신 넣을 arg 
  const arr11 = [1, 2, 3, 4, 5];
  const resultSpliceArgs = arr11.splice(1, 1, 100); 
  console.log(arr11, resultSpliceArgs); 

// join(separator) : 배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
const arr12 = [1, 2 ,3, 4, 5];
const resultJoin = arr12.join(':');  //':'로 구분된 문자열 만듦
console.log(arr12, resultJoin);  // 원본 배열은 그대로 존재

// sort(callback) : 원본 배열의 요소를 문자열로 변환 후, 오름차순 정렬한 배열을 반환
      // callback 넣을 수 있음      // → 따라서 숫자의 오름 차순이 아님!
const arr13 = [5, 23, 24576, 56426, 26, 9];
// const resultSort = arr13.sort(); 
// console.log(arr13, resultSort);  // 원본도 변경시키므로 같은 값 반환 : [23, 24576, 26, 5, 56426, 9]
const resultSort = arr13.sort((a, b) => a - b);  // callback함수를 이용해서 숫자의 오름차순 정렬
                    // 배열을 2개씩 대입 → a - b 시도 후, +값이면 a > b 로 인식 → a와 b의 위치 변경
                    // (b - a) : 숫자 내림차순 정렬 
console.log(arr13, resultSort);  // 숫자 오름차순으로 : [5, 9, 23, 26, 24576, 56426]

// map(callback) : 배열의 모든 요소에 대해 콜백함수를 반복하여 실행한 후, 새로운 배열을 반환 (return 필수)
const arr14 = [1, 2 ,3, 4, 5];                                 // → 원본 수정 없음

// arr14[0] *= 2;
// arr14[1] *= 2;
// arr14[2] *= 2;
// arr14[3] *= 2;
// arr14[4] *= 2;

// for(let i = 0; i < arr14.length; i++) {
//   arr14[i] *= 2;
// }

// const resultMap = arr14.map(val => val *= 2); 

const resultMap = arr14.map(val => {
  if(val % 3 === 0) {
    return '짝';
  } else {
    return val;
  }
}); 
console.log(arr14, resultMap); 

// 2의 배수만 '이'라고 출력해주세요.
const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer = arr15.map(element => {
  if(element % 2 === 0) {
    return '이';
  } else {
    return element;
  }
});
console.log(arr15, answer);

// some(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후, 
//                  조건에 만족하는 결과가 하나라도 있으면 true, 없으면 false
const arr16 = [1, 2, 3, 4, 5];
const resultSome = arr16.some(val => val === 10);
const resultSome1 = arr16.some(val => {
  if(val === 10) {
    return true;
  } else {
    return false;
  }
});
console.log(arr16, resultSome);

// every(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//                   모든 요소가 조건에 만족하면 true, 하나라도 불만족 시 false
const arr17 = [1, 2, 3, 4, 5];
const resultEvery = arr17.every(val => val % 3 === 0);
console.log(resultEvery);
const resultEvery1 = arr17.every(val => val % 1 === 0);
console.log(resultEvery1);

// filter(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//                    조건에 맞는 요소만 모아서 '새로운' 배열로 반환
const arr18 = [1, 2, 3, 4, 5];
const resultFilter = arr18.filter(val => val % 2 === 0);
console.log(arr18, resultFilter);

// forEach(callback) : 배열의 모든 요소에 대해 콜백함수를 반복 실행
//                     map 처럼 반환 처리가 없음
const arr19 = [1, 2, 3, 4, 5];
arr19.forEach((val, key) => console.log(`${key} : ${val}`));
      // 요소의 값, 요소의 인덱스 (위치 정해져있음)

// Destructuring 문법
const arr20 = [1, 2];
const num1 = arr20[0];
const num2 = arr20[1];

const [num3, num4] = arr20;
console.log(num3, num4);
