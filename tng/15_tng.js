// 현재 시간 가져오기

// const now = new Date();

// const nowMinutes = now.getMinutes();
// const nowSeconds = now.getSeconds();

// const nowHours = now.getHours();
// let nowHours12 = 0
// if(nowHours < 12) {
//   nowHours12 = `오전 ${nowHours}`
// } else if(nowHours === 12) {
//   nowHours12 = `오후 ${nowHours}`
// } else {
//   nowHours12 = `오후 ${nowHours-12}`
// }

// let nowtime = `${nowHours12}:${nowMinutes}:${nowSeconds}`



// 시간 출력하기

// 현재 시간 함수
function timesettig() {
  // 현재 시간 가져오기
  const now = new Date();
  const nowMinutes = now.getMinutes().toString().padStart(2, '0');
  const nowSeconds = now.getSeconds().toString().padStart(2, '0');
  // 12시간으로 바꾸기
  const nowHours = now.getHours();
  let nowHours12 = 0;
  if(nowHours < 12) {
    nowHours12 = `오전 ${nowHours.toString().padStart(2, '0')}`;
  } else if(nowHours === 12) {
    nowHours12 = `오후 ${nowHours.toString().padStart(2, '0')}`;
  } else {
    nowHours12 = `오후 ${(nowHours-12).toString().padStart(2, '0')}`;
  }
  // 시간 출력 만들기
  return `${nowHours12}:${nowMinutes}:${nowSeconds}`;
};

// 밖의 변수에 인터벌 담기, 인터벌 함수화
let myTime;
function timeout() {
  myTime = setInterval(() => {
    timebox.textContent = timesettig();
  }, 1000) ;
};
// 시간 출력 위치
const timebox = document.querySelector('#here');
// 인터벌 함수 출력
timeout();


// 버튼 가져오기
const stopBtn = document.querySelector('#stop');
const restartBtn = document.querySelector('#restart');

// 정지 버튼
// 인터벌 함수 담은 변수 멈추기
stopBtn.addEventListener('click', () => {
  clearInterval(myTime);
});
// 재시작 버튼
// 인터벌 함수 재가동
restartBtn.addEventListener('click', () => {
  timeout();
});


// 미국 시간 함수
function timesettigUS() {
  // 현재 시간 가져오기
  const now = new Date();
  const nowMinutes = now.getMinutes().toString().padStart(2, '0');
  const nowSeconds = now.getSeconds().toString().padStart(2, '0');
  // 12시간으로 바꾸기
  const nowHours = now.getHours();
  const nowHoursUS = Math.abs(nowHours - 13).toString().padStart(2, '0');
  let nowHours12 = 0;
  if(nowHoursUS < 12) {
    nowHours12 = `오전 ${nowHoursUS}`;
  } else if(nowHoursUS === 12) {
    nowHours12 = `오후 ${nowHoursUS}`;
  } else {
    nowHours12 = `오후 ${nowHoursUS}`;
  }
  // 시간 출력 만들기
  return `${nowHours12}:${nowMinutes}:${nowSeconds}`;
};

// 시간 출력 위치
const timeboxUs = document.querySelector('#here2');
// 밖의 변수에 인터벌 담기, 인터벌 함수화
let myTimeUS;
function timeoutUS() {
  myTimeUS = setInterval(() => {
    timeboxUs.textContent = timesettigUS();
  }, 1000) ;
};
// 인터벌 함수 출력
timeoutUS();