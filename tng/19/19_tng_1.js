// document.querySelector('.request-box > button').addEventListener('click', () => {
//   const url = document.querySelector('#apiUrl').value;
//   const cardBox = document.querySelector('.card-box');
//   cardBox.textContent = '';

//   // loading 만들기
//   const loading = document.querySelector('.loading');
//   loading.classList.add('loading-on');

//   axios.get(url)
//   .then(res => {
//     // console.log(res);
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundIamge = `url(${item.download_url})`;
      
//       cardBox.appendChild(newCard);
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     loading.classList.remove('loading-on')
//   })
// });


/**
 * 플래그에 따라 로딩을 true: on/false : off
 * @param {boolean} flg 
 */
function loadingToggle(flg) {
  const loading = document.querySelector('.loading');
  if(flg) {
    loading.classList.add('loading-on');
  } else {
    loading.classList.remove('loading-on');
  }
}


// async
document.querySelector('.request-box > button').addEventListener('click', async () => {
  // loading 만들기 -> 함수로 변경
  // const loading = document.querySelector('.loading');
  // loading.classList.add('loading-on');
  loadingToggle(true);
  
  try {
    // 이미지 url, 카드박스 가져오기 
    const url = document.querySelector('#apiUrl').value;
    const cardBox = document.querySelector('.card-box');
    // 작동 전 카드박스 비우기
    cardBox.textContent = '';
    // 이미지 url 적용하기
    const res = await axios.get(url)
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;
      
      cardBox.appendChild(newCard);
    });
  } catch(err) {  // 에러 났을 때
    console.error(err);
  } finally {  // 에러 나든 안 나든 작동
    // loading.classList.remove('loading-on')
    loadingToggle(false);
  }

});