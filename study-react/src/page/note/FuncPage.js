import React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.functionCountUp = this.functionCountUp.bind(this); // 일반 함수는 바인딩을 시켜줘야 동작
  }

  functionCountUp() {
    console.log(this);
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  }

  ArrowFunctionCountUp = () => {
    console.log(this);
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.functionCountUp}>일반 함수</button>
        <button onClick={this.ArrowFunctionCountUp}>화살표 함수</button>
      </div>
    );
  }
}

const FuncPage = () => {
  return (
    <>
      <div>
        <pre>
          <code>
            {` /**
 * 일급객체란?
 * 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 의미
 * 함수는 다른 함수의 매개변수가 될 수도 있고 , 반환갑시 될 수 도 있고, 할당도 가능
 */

function add(a, b) {
  return a + b;
}
console.log(add(1, 4));

const sum = function sum(a, b) {
  return a + b;
};
console.log(sum(10, 20));

/**
 * 함수표현식과 선언식의 차이
 * 가장 큰 차이는 호이스팅 여부다.
 * 함수의 호이스팅? 함수 선언문이 마치 코드 맨 앞단에 작성된 것처럼 작동하는 자바스크립트의 특징
 * 맨 앞에 호출한 hello()는 어떠한 에러도 없이 동작.
 * 함수선언문이 미리 메모리에 등록됐고, 코드의 순서에 상관 없이 정상적으로 동작.
 */

hello();
function hello() {
  console.log("hello");
}

hello();

/**
 * 함수 선언문과 다르게 정상적으로 호출 x, undefined로 남아있다.
 * 함수 표현식은 변수에 할당하기 때문에 할당문이 실행되는 시점에 함수가 할당되어 동작
 */

// console.log(typeof hello2 === "undefined"); // true
// hello2();                                   // 에러 발생
var hello2 = function () {
  console.log("hello2");
};
hello2();

/** 함수 선언문은 함수가 선언된 위치에 상관없이 함수 호이스팅의 특징을 살리면서 어디서든 호출 가능 */

/** Function 생성자 */
const add2 = new Function("a", "b", "return a+b");
console.log(add2(10, 24));

/** 화살표 함수 */
const add3 = (a, b) => {
  return a + b;
};

const add4 = (a, b) => a + b;

console.log(add3(1, 2));
console.log(add4(1, 2));

/**
 * 화살표 함수에서는 constructor를 사용할 수 없다.
 * 생성자 함수로 화살표 함수를 사용하는 것은 불가능.
 * 화살표 함수에서는 arguments가 존재하지 않는다.
 * 생성자?: 객체에 대한 초기화
 */
// const Car = (name) => {
//   this.name = name;
// };
// const myCar = new Car("하이"); // new 생성자(constructor) 사용 불가

function hello3() {
  console.log(arguments);
}
console.log(hello3(1, 2, 3));

const hi = () => {
  console.log("hi arguments", arguments);
};
hi(1, 2, 3);

/**
 * 화살표 함수와 일반 함수의 가장 큰 차이점은 바로 this 바인딩.
 * this: 자신이 속한 객체나 자신이 생성할 인스턴스를 가리키는 값
 * this는 화살표 함수 이전까지는 함수를 정의할 때 결정되는 것이 아니라, 함수가 어떻게 호출되느냐에 따라 동적으로 결정된다.
 * 만약 함수가 일반 함수로서 호출된다면, 그 내부의 this는 전역 개체를 가리키게 된다.
 * 그러나 이와 달리 화상표 함수는 함수 자체의 바인딩을 갖지 않는다.
 * 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 따르게 된다.
 */

const hello4 = () => {
  console.log(this);
};
function hi() {
  console.log(this);
}
******************************************************************

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.functionCountUp = this.functionCountUp.bind(this); // 일반 함수는 바인딩을 시켜줘야 동작
  }

  functionCountUp() {
    console.log(this);
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  }

  ArrowFunctionCountUp = () => {
    console.log(this);
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.functionCountUp}>일반 함수</button>
        <button onClick={this.ArrowFunctionCountUp}>화살표 함수</button>
      </div>
    );
  }
}
const FuncPage = () => {
  return (
    <>
      <Component />
    </>
  );
};
버튼 클릭 후 콘솔로그 확인 state값
`}
          </code>
        </pre>
      </div>
      <Component />
    </>
  );
};
export default FuncPage;
