const writeBnt = document.querySelector('#writeBtn');
writeBnt.addEventListener('click', () => {
  const keywordInput = document.querySelector('#keyword');

    // if()에 변수를 넣었을 경우, 변수의 값이 빈문자열, 0, null, undefined 일 때, false.
    // false로 인식 : false | null | undefined | 0 | '' 
  if(keywordInput.value) {
  // content 요소 생성
  const newContent = document.createElement('div')  ;
  newContent.classList.add('content');
  const newP = document.createElement('p');
  newP.textContent =keywordInput.value;
  newContent.appendChild(newP);

  newContent.addEventListener('click', (e) => {
    e.target.classList.toggle('toggle-line-through');
  });


  // 생성한 요소 추가
  const printBox = document.querySelector('.print-box');
  printBox.appendChild(newContent);

  // 검색어 초기화
  keywordInput.value = '';
  }
});

const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();  // 기존 keypress 이벤트 중지
    const writeBnt = document.querySelector('#writeBtn');
    writeBnt.click();  // 작성 버튼 클릭 이벤트 발생시키기
  };
});

