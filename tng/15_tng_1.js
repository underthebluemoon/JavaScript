// 딜레용 방지용 default 시간 출력 (interval 시작하는데 1초 걸림)
nowTimeIntoElement('#nowtime');

// 멈춰 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null; // 멈추고 interval 값 null
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#nowtime'); // interval 시작(1초 소요) 전 출력
  
  if(intervalNowTime === null) {  // interval 값 null일 때만 작동 (중복 작동 방지)
    intervalNowTime = setInterval(() => {
      nowTimeIntoElement('#nowtime');
    }, 1000);
  }
});

// 기록 버튼 처리
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportContainer');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMilliseconds();  // 현재시간 가져오기
  // newP.textContent = document.querySelector('#nowTime').textContent;  // 멈춰있는 시간 가져오기
  container.appendChild(newP);
});

// 기록 초기화 버튼 처리
const btnReportReset = document.querySelector('#btnReportReset');
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportContainer').textContent = '';
})


//---------------- 이하 함수 ---------------

// querySelector()를 함수()로 이용, parameter datatype 지정 ( 함수 위에서 /** */: js document)
/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
};


/**
 * 현재시간을 `오전 hh:MM:SS` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormat() {
  const now = new Date();
  // toLocaleTimeString() 비슷한 형식 
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }

  return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


/**
 * 현재시간을 `오전 hh:MM:SS.sss` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormatUntilMilliseconds() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }

  return `${ampm}`
  + ` ${hours.toString().padStart(2, '0')}`
  + `:${minutes.toString().padStart(2, '0')}`
  + `:${seconds.toString().padStart(2, '0')}`
  + `.${milliseconds.toString().padStart(3, '0')}`;
}

let intervalNowTime = setInterval(() => {
  nowTimeIntoElement('#nowtime');
}, 1000);
