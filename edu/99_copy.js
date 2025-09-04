const user = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
}

// 얕은 복사 : 최상위 계층의 요소만 독립적으로 복사,
//            그 외 계층은 참조 형태로 복사
// const shallowCopy = {...user};
// shallowCopy.age = 200;
// shallowCopy.friends.id = 100; // deepth 더 깊어짐. 참조
// shallowCopy.friends = {test: 'ttt'}; // 최상위 요소임. 완전 복사

// console.log(user, shallowCopy);

// 딮 카피 : 모든 계층의 요소를 독립적으로 복사
                // json으로 변경하여 복사
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.friends.id = 200;  // copy본만 변경. 원본 그대로.

// Node.js 17+ 또는 브라우저 최신 환경 : json으로 변경하여 복사
const cloneCopy = structuredClone(user);
cloneCopy.friends.id = 200;

console.log(user);

//----------------
// Destructuring
//----------------

// const arr = ['Hong', 2];

// arr[0];
// arr[1];
// const [name, age] = arr;
// const [name2] = arr;
// const [, age2] = arr;

// console.log(navigator);
// console.log(arr);

const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
}

const {name, age, friends} = user2
console.log(name, friends);
    // 키를 매칭해서 값을 가져옴
