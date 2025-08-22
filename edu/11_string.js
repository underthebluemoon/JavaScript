// String 객체
// let str = new String ('문자열 입니다.');
// let str = '문자열 입니다.';
let str = `문자열"'\`입니다.`;
// 특수문자를 문자로 처리할 경우 \로 escape 처리

// length : 문자열의 길이를 반환
console.log(str.length);
          // iterable한 객체(string, array등)만 사용가능 → 반복 작업 가능한 객체들

// charAt(idx) : idx의 요소의 값을 반환
console.log(str.charAt(3)); // 0:문, 1:자, 2:열, 3:" → 각각 요소가 char이어서 idx로 접근 가능

// indexOf(searchStr, idx) : 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
    //idx 생략 가능, start 지점 지정  //찾지 못하면 -1 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));  // 왼 → 오른 방향 첫번째 만나는 idx
console.log(str.indexOf('열', 3));  // idx3부터 첫번째 만나는 idx
console.log(str.indexOf('입니다')); 
console.log(str.indexOf('숫자')); // 없는 값 : -1
                    // 존재 여부 체크 시 includes이용 가독성 향상

// replace(pattern, replacement) : pattern을 찾아서 '첫번째' 문자열을 replacement 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '숫자'));
console.log(str.replace('문자열', ''));  // 빈공간으로 치환 → 문자열 삭제 가능 : '입니다. 문자열입니다.'
// replaceAll(pattern, replacement) : pattern을 찾아서 '모든' 문자열을 replacement 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', '')); // '입니다. 입니다.'

// substring(startIdx, endIdx) : startIdx부터 endIdx까지 자른 문자열을 반환
                    // endIdx 생략 가능
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(3, 5)); // 3번부터 5번 전까지 : endIdx 미포함
                    // 음수 사용 가능 : 끝에서 부터

//  split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열 반환
                  // limit 생략 가능. 배열 길이 지정
str = '탕수육,짜장면,짬뽕,크림새우';  // 공백도 문자 취급
let arr = str.split(',');
console.log(arr)

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
str = '       하  하    ';
console.log(str.trim()); // '하  하' : 문자 사이에 있는 공백 유지
                // parameter 입력시 해당 문자열을 없애는 것으로 이용 가능 → 해당 기능은 replace로 사용. trim으로 이용 하지 않음. 기능 분리를 위해.

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환
str = 'AfdvwdeSDa';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// padStart, padEnd
str = 'sweet'
console.log(str.padStart(7, '*')); // **sweet
console.log(str.padEnd(7, '*')); // sweet**
console.log((str.padStart(7, '*')).padEnd(9, '*')); // **sweet**

