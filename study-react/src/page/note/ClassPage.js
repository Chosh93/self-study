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
