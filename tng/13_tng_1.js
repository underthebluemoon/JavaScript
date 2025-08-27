// - 아래의 프로그램을 만들어주세요.
//  - '사과게임' 위에 '장기' 삽임
//  - '어메이징브릭'에 베이지 배경색 추가
//  - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정


// 새로운 요소삽입 > 부모노드.insertBefor(새 노드, 타겟노드)
  // 부모 노드 = querrySelctor('#ul');
  const parentUl = document.querySelector('#ul');
  // 새 노드 = createElement(li); , textContent = '장기'
  const newJanggi = document.createElement('li');
  newJanggi.textContent = '장기';
  // 타겟 노드 = queryselector('apple');
  const targetApple = document.querySelector('#apple');
parentUl.insertBefore(newJanggi, targetApple);

// 
const amazingLi = document.querySelector('#ul li:nth-last-child');
amazingLi.style.backgroundColor = 'beige';

// 홀수 짝수 색 입히기
// const listLi = document.querySelectorAll('#ul li');
// listLi.forEach((node, idx) => {
//   if(idx % 2 === 0) {
//     node.style.color = 'red';
//   } else {
//     node.style.color = 'blue';
//   }
// });

// 위의 코드를 함수로 변경. 원할 때마다 호출
function changeLiColor() {
  const listLi = document.querySelectorAll('#ul li');
  listLi.forEach((node, idx) => {
    if(idx % 2 === 0) {
      node.style.color = 'red';
    } else {
      node.style.color = 'blue';
    }
  })
}

function addLichild(content) {
  const newNode = document.createElement('li');
  newNode.textContent = content;
  parentUl.insertBefore(newNode, targetApple);
}



const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://~~~~~~~~~~~~~~~~',
}
              // item에 위의 카드 값을 넣음! 예: result, {title: ~~, content: ~~, img: ~~}
function addCard(item) {

  // 카드 구조 만들기
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  
  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');
  
  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;
  
  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;
  
  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);
  
  document.body.appendChild(newCard);

}

