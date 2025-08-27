const UL = document.querySelector('#ul');
const chess = document.createElement('li');
chess.textContent = '장기';
const target = document.querySelector('#apple');
UL.insertBefore(chess, target);


const gameList = document.querySelectorAll('ul > li');

gameList[9].style.backgroundColor = 'beige';

// for(let i = 0; i < gameList.length; i++) {
//   if(i % 2 === 0) {
//   gameList[i].style.color = 'blue';
//   } else {
//     gameList[i].style.color = 'red';
//   }
// }

gameList.forEach((li, index) => {
  if(index % 2 === 0) {
    li.style.color = 'blue';
  } else {
    li.style.color = 'red';
  }
});



// gameList.forEach(node % 2 === 0 => node.style.color = 'green');

// for(let i = 0; i < tagH1.length; i++) {
//   tagH1[i].style.fontSize = '50px';
// }