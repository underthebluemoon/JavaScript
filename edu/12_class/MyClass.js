// class MyClass {
//   // 파일명 = 클래스명
//   add(a, b) {
//     // class 안에서는 function keyword 없이 가능
//     return a + b;
//   }
// }

// // class MyClass2 extends MyClass {
// //   multi(a, b) {
// //     return a * b;
// //   }
// // }
  
// // let num = 1;
// // const myclass2 = new MyClass2();  // 인스턴스화
// // let addNum = myclass2.add(5, 10); // 상속
// // let multiNum = myclass2.multi(1, 2);
// // console.log(multiNum);
// // console.log(addNum);

// const myClass = new MyClass(); // 인스턴스화
// myClass.add(5, 10);  // 접근해서 사용 가능


class MyClass {
  // property 선언. 접근제어 지시자
  name;        //이름만 - public : 클래스 내외부 어디서든 접근 가능
  #age;            // # - private : 클래스 내부에서만 접근 가능. undefined
  _addr;      // _ - protected : 나와 그리고 상속관계에서 자식클래스들은 접근이 가능
  static gender = 'M';  // static : class 정적 변수. 인스턴스화 없이 (new keyword 없이) 접근 가능

  // 생성자 메소드
  // `new` 키워드로 객체를 인스턴스화 할 때 딱 한 번 실행되는 메소드
  constructor(name, age, addr) {  // 인스턴트 정의할 때 parameter
    this.name = name;
    this.#age = age;
    this._addr + addr;
  }

  // gatter / setter
  // 메소드지만 사용할 때 프로퍼티처럼 사용 하듯이 동작한다
  get age() {  // 'age()'가 아닌 'age'(propety처럼)로 접근. 
    return this.#age;  // 값에 접근하기 위함
  }
  set age(age) {
    this.#age = age;  // 값을 변경하기 위함
  }

  getAge() {
    return this.#age;
  }

  // 인스턴스 메소드
  add(a,b) {
    return a + b;
  }
}

console.log(MyClass.gender);  // static 선언 : property, method 앞에 keyword. 인스턴스화 없이 접근 가능

// const myClass = new MyClass();
// console.log(myClass.age);    // private : 클래스 내부에서만 접근 가능. undefined
// console.log(myClass.name);   // public : 클래스 내외부 어디서든 접근 가능
// console.log(myClass._addr);  // protctive : 실제 문법이 아닌, 개발자들이 임의로 protected를 적용시키기 위한 표식에 가까움

const myClass = new MyClass('홍길동', 20, '조선');  // constructor parameter에 들어감
const myClass2 = new MyClass('갑순이', 10, '한국');
console.log(myClass.name);
console.log(myClass2.name);
myClass.age = 40; // setter로 값 변경
console.log(myClass.age); // getter로 property처럼 접근 가능
console.log(myClass.getAge()); // get age가 아닌 getage라는 함수를 만들어 출력하는경우


