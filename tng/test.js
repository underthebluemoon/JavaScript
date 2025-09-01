function orderInCafe() {
  order('Americano', function(orderNum) {
    if(orderNum === false) console.log('주문 실패');
    else {
      payment(orderNum, function(paymentNum) {
        if(paymentNum === false) console.log('결제 실패');
        else {
          makecoffee(orderNum, function(makingcoffee) {
            if(makingcoffee === false) console.log('제조 실패');
            else{
              console.log('완료!');
            }
          });
        }
      });
    }
  });
}

function orderInCafePromise() {
  order('Americano')
    .then(orderNum => payment(orderNum))
    .then(orderNum => makecoffee(orderNum))
    .then(orderNum => console.log('완료!'))
    .catch(error => console.log('실패'));
}