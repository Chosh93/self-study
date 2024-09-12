import React from "react";

const ClassPage = () => {
  return (
    <div>
      <pre>
        <code>
          {`
/** 
 * 클래스란?
 * 특정한 객체를 만들기 위한 일종의 템플릿과 같은 개념이다.
 * 즉, 특정한 형태의 객체를 반복적으로 만들기 위해 사용되는 것.
 *
 * 클래스 내부 구성요소
 * 1. 필드 : 멤버변수라고도 하며, 클래스 내부에 선언된 변수를 말한다, 이때 클래스 내 메서드 안에서 사용되는 지역변수는 포함 x
 *  1-1. 필드 : 클래스 중괄호 내 어디든 사용가능, 힙 영역 객체 내부에 저장
 *  1-2. 지역변수 : 해당 메서드 중괄호 내에서만 사용이 가능, 스택 영역에 저장
 * 2. 메서드 : 멤버 변수라고도 하며, 클래스 내 함수들을 말한다.
 * 3. 생성자 : 해당 클래스의 객체를 생성하는 역할을 담당, 필요할 경우 객체에 포함되는 필드의 초기화도 수행하게끔 할 수 있다.
 * 
 * constructor 는 생성자로, 객체를 생성하는 데 사용하는 특수한 메서드 이다.
 * 단 하나만 존재할 수 있으며, 여러개르 사용한다면 에러가 발생한다.
 */
class Car {
  // constructor는 생성자, 최초에 생성할 때 어떤 인수를 받을지 결정할 수 있으며, 객체를 초기화 하는 용도로도 사용
  constructor(name) {
    this.name = name;
  }
  // 메서드
  honk() {
    console.log(\`\${this.name}이 경적을 울립니다.\`);
  }
  // 정적 메서드
  static hello() {
    console.log("저는 자동차 입니다.");
  }
  // setter
  set age(value) {
    this.carAge = value;
  }
  // getter
  get age() {
    return this.carAge;
  }
}
// Car 클래스를 활용해 myCar 객체를 만듦
const myCar = new Car("자동차");
// 메서드 호출
myCar.honk();
// 정적 메서드는 클래스에서 직접 호출
Car.hello();
// 정적메서드는 클래스로 만든 객체에서는 호출할 수 없다.
// myCar.hello();
// setter를 만들면 값을 할당할 수 있다.
myCar.age = 32;
// getter로 값을 가져올 수 있다.
console.log(myCar.age, myCar.name);
          `}
        </code>
      </pre>
    </div>
  );
};

export default ClassPage;
