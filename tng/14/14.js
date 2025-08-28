// const result = document.querySelector('.result');

// btn.addEventListener('keyup', btnAction);
// function btnAction(e) {
//   result.textContent = '';
//   result.style.border = solid;
//   console.log(e.target.value);
// }

// form.addEventListener('submit', (e) => {
  //   // console.log(e.target.value);
  //   console.log(say.value);
  //   result.textContent = say.value;
  //   result.style.border = solid;
  // });
  
  // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    
    //   console.log(say.value);
    
    //   const result = document.createElement('p');
    //   result.textContent= say.value;
    //   result.style.bordersize = '1px';
    //   result.style.borderStyle = 'solid';
    //   form.appendChild(result);
    
//});

// form : 부모 노드 선언
const form = document.querySelector('form');
// 버튼 선언
const btn = document.querySelector('button');
// 인풋 선언
const say = document.querySelector('input');

// 클릭 이벤트 생성
btn.addEventListener('click', (e) => {
  //   // 인풋 선언
  // const say = document.querySelector('input');

  // 작동 조건 : 인풋이 비어있지 않을 때
  if(say.value.trim() !== '') {    
    console.log(say.value);
  
    //result 생성
    const result = document.createElement('p');
    result.textContent= say.value;
    // result 위치 appendChild
    form.appendChild(result);
    // result style
    result.classList.add('result');

    // 생성된 p태그 클릭시 이벤트 발생
    result.addEventListener('click', () => {
      result.classList.toggle('check');
    });

  };
  // 버튼 클릭 후 입력창 비우기
  say.value = '';
  console.log(say.value);
});

// 키 눌렀을 때 이벤트 생성
say.addEventListener('keydown', (e) => {
  // const say = document.querySelector('input');
  // form 새로고침 방지
  e.preventDefault();
  
  // 작동 조건 : 엔터 입력
  if(e.key === 'Enter') {
    // 조건 추가 : 인풋 값이 비어있지 않을 때
    if(say.value.trim() !== '') {    
      const say = document.querySelector('input');
      console.log(say.value);
    
      //result 생성
      const result = document.createElement('p');
      result.textContent= say.value;
      // result 위치 appendChild
      form.appendChild(result);
      // result style
      result.classList.add('result');

      // 생성된 p태그 클릭시 이벤트 발생
      result.addEventListener('click', () => {
        result.classList.toggle('check');
      });

    };
    // 검색 후 입력창 비우기
    say.value = '';
    console.log(say.value);
  }
});

