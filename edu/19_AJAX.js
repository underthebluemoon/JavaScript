// // XML
// <xml>
//     <data >
//       <name>홍길동</name>
//       <age>20</age>
//       ...

//     </data>
// </xml> 

// // JSON
// {
//   "data": {
//     "name": "홍길동",
//     "age": 20
//   }
// }

// const t = {}

const url = "https://picsum.photos/v2/list?page=1&limit=10"

      // get(url) : http method
      // post(), put(), delete(), ...
axios.get(url)
.then(Response => {
    // 요청이 올바르게 될 경우(200~300번대), then. 응답 내용이 response에 담겨서 옴
  console.log(Response);
            // 서버에서 응답이 온 response중, 내가 필요한 부분(data) : response.data
  Response.data.forEach((item, idx) => {
                // img 태그의 scr속성에 각 요소의 download_url 삽입
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300px');

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})
.catch(err => {
  console.log(err);
            // 에러 응답에서 접근 : err.response.data
});