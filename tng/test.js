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