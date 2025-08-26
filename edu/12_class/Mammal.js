class Mamaal {  // whale과 flyingsquirrel에서 중복되는 값 추상화
  _name;
  _residence;
  
  constructor(name, residence) {
    this._name = name;
    this._residence = residence;
  }
  
  breath() {
    console.log(`${this._name}가 폐호흡합니다.`);
  }
}


class Whale extends Mamaal { // extends 로 상속 받음
  // super : 부모 객체의 생성자 함수를 호출, 파라미터 같아야함
  constructor(name, residence) {
    super(name, residence); 
  }

  // 오버라이딩 - 상속 위에 덮음. 메소드 이름과 파라미터가 같아야함
  breath() {
    console.log(`눈누난나`);
  }

  swimming() {
    console.log(`${this._name}가 헤엄칩니다.`);
  }
}

class FlyingSquirrel extends Mamaal { // extends 로 상속 받음
  // super : 부모 객체의 생성자 함수를 호출, 파라미터 같게
  constructor(name, residence) {
    super(name, residence); 
  }

  flying() {
    console.log(`${this._name}가 날아갑니다.`);
  }
}

const whale = new Whale('고래', '바다');
whale.swimming();
whale.breath();