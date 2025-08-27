// 이벤트

// alert 속성을 함수로 만든 뒤, html에서 함수 실행(test())으로 사용
function test() {
  alert('테스트');
};

// property listener (프로퍼티 리스너. 거의 안 씀)
// 동일한 이벤트를 여러번 사용 불가 (마지막만 적용)
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼2222');
};

// addEventListener (주로 씀)
// 동일한 이벤트를 여러번 사용 가능
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('버튼3333');
});  // 버튼 클릭시 안내창

btn3.addEventListener('click', btn3Alert); 
// 이벤트 할 때 parameter을 받으면 콘솔에 이벤트 객체를 받을 수 있다.
function btn3Alert(event) {
  console.log(event);
  alert('3333');
};  // 동일 이벤트 2회, renove를 위해 함수 형식, 이벤트 객체를 받기 위한 파라미터

window.addEventListener('scroll', () => {
  console.log('scroll test');
});  // 스크롤 측정 이벤트. 데브툴즈에 표현됨

window.addEventListener('load', () => {
  window.open('htts://www.google.com');
});  // 팝업 이벤트

// -------응용
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  // e.target: 이벤트 발생 대상이 되는 node 
  // .value: input에 들어가 있는 값

  const regex = /^[0-9]+$/;
  const label = document.querySelector('#labelEmail');
  if(!regex.test(e.target.value)) {
    label.textContent = '숫자만 입력해주세요.';
  } else {
    label.textContent ='';
  }
});   


// removeEventListener() : 이벤트 제거
// 이벤트 줄 때 사용한 함수를 그대로 가져와, remove
// 단, 익명함수 안 됨
// btn3.removeEventListener('click', btn3Alert);


// -----------------------------------------------
// 비밀번호 보였다가 안 보이게 하기! (input type변경)
// checkbox에 접근
const chkPw = document.querySelector('#seePw');
// checkbox에 change 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // input password 접근
  const pw = document.querySelector('#pw');
  // 체크 여부 확인 분기
  if(e.target.checked) {
    // input password type 속성 text로 변경
    pw.setAttribute('type', 'text');
  } else { 
    // 체크 해제시 다시 type password로 변경
    pw.setAttribute('type', 'password');
  }
});

// ----------------------------------------------
// 버튼을 누르면 숫자가 증가

const plusBtn = document.querySelector('#plusBtn');
// plusBtn.addEventListener('click', () => {

// });