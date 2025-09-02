const search = document.querySelector('#search');
const searchBtn = document.querySelector('.searchBtn');
const container = document.querySelector('.container');

// 클릭시 url 가져오기
searchBtn.addEventListener('click', () => {
  // url 가져오기
  let url = search.value;
  console.log(url);

  // 임시 url
  // const url = "https://picsum.photos/v2/list?page=1&limit=10"

  // 남아있던 컨테이너 비우기
  container.textContent = '';

  // axios 가져오기
  axios.get(url)
  .then(Response => {
    console.log(Response);

    // download_url 삽입
    Response.data.forEach((item, idx) => {
      const imgbox = document.createElement('div');
      imgbox.classList.add('item');
      imgbox.style.backgroundImage = `url('${item.download_url}')`;
  
      container.appendChild(imgbox);
    });
  })

  // search.value = '';

  // .catch(err => {
  //   console.log(err);
  // });

});

