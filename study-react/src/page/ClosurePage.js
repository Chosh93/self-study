import React, { useState } from "react";

const ClosurePage = () => {
  const [state, setState] = useState(1);

  function handleClick() {
    // useState 호출은 위에서 끝났지만,
    // setState는 계속 내부의 최신값(prev)을 알고 있다.
    // 이는 클로저를 활용했기 때문에 가능하다.
    setState((prev) => prev + 1);
  }

  const reset = () => {
    setState(1);
  };

  /**
   * useState 함수의 호출은 Component 내부 첫출에서 종료됐는ㄷ, setState는 useState 내부의 최신 값을 어떻게 계속해서 확인할 수 있을까?
   * 그것은 바로 클로저가 useState 내부에서 활용됐기 때문이다.
   * 외부함수(useState)가 반환한 내부함수(setState)는 외부함수의 호출이 끝났음에도 자신이 선언된 외부함수가 선언된 환경을 기억하기 때문에
   * 계속해서 state값을 사용할 수 있는 것이다.
   */
  return (
    <>
      <div>
        <pre>
          <code>
            {`// /**
//  * 리액트의 클래스 컴포넌트에 대한 이해가 클래스, 프로토타입, this에 달려있다면,
//  * 함수 컴포넌트에 대한 이해는 클로저에 달려있다. 함수 컴포넌트의 구조화 작동방식, 훅의원리, 의존성배열 등
//  * 함수 컴포넌트의 대부분의 기술이 모두 클로저에 의존하고 있다.
//  */

// /**
//  * a변수의 범위는 add 전체이고 b의 범위는 innerAdd 전체다.
//  * 이러한 변수의 유효범위를 스코프라고 한다.
//  */
// function add() {
//     const a = 10;
//     function innerAdd() {
//       const b = 20;
//       console.log(a + b);
//     }
//     innerAdd();
//   }
//   add();

//   /**
//    * 전역 스코프?: 어디서든 호출할 수 있다.
//    * 브라우저 환경에서 전역 객체는 window, NodeJs환경에서는 global이 있다.
//    */
//   var global = "global scope";
//   function hello() {
//     console.log(global);
//   }
//   console.log(global);
//   hello();

//   /**
//    * 함수 스코프?: 다른 언어와 달리 js는 기본적으로 함수레벨 스코프를 따른다.
//    * 즉, {} 블록이 스코프의 범위를 결정하지 않는다.
//    */
//   if (true) {
//     var test = "test";
//   }
//   console.log(test);

//   function hello() {
//     var local = "local";
//     console.log(local);
//   }
//   hello();
//   // console.log(local); // local is not defined

//   /**
//    * 만약 전역스코프와 함수스코프가 겹쳐있다면?
//    * js에서 스코프는, 일단 가장 가까운 스코프에서 변수가 존재하는지를 먼저 확인.
//    */
//   var x = 10;
//   function foo() {
//     var x = 100;
//     console.log(x);
//     function bar() {
//       var x = 1000;
//       console.log(x);
//     }
//     bar();
//   }
//   console.log(x);
//   foo();

//   /**
//    * 클로저의 활용
//    */
//   function outerfunction() {
//     var x = "hello";
//     function innerFunction() {
//       console.log(x);
//     }
//     return innerFunction;
//   }
//   const innerFunction = outerfunction();
//   innerFunction();

//   /**
//    * 전역 스코프는 어디서든 원하는 값을 꺼냉ㄹ 수 있다는 장점이 있지만,
//    * 반대로 생각하면 누구든 접근 가능하고 수정할 수 있다는 뜻
//    */

//   var counter = 0;
//   function handleclick() {
//     counter++; // 전역스코프가 바로 수정
//


******************************************************************
const [state, setState] = useState(1);

  function handleClick() {
    // useState 호출은 위에서 끝났지만,
    // setState는 계속 내부의 최신값(prev)을 알고 있다.
    // 이는 클로저를 활용했기 때문에 가능하다.
    setState((prev) => prev + 1);
  }

  const reset = () => {
    setState(1);
  };

  /**
   * useState 함수의 호출은 Component 내부 첫출에서 종료됐는ㄷ, setState는 useState 내부의 최신 값을 어떻게 계속해서 확인할 수 있을까?
   * 그것은 바로 클로저가 useState 내부에서 활용됐기 때문이다.
   * 외부함수(useState)가 반환한 내부함수(setState)는 외부함수의 호출이 끝났음에도 자신이 선언된 외부함수가 선언된 환경을 기억하기 때문에
   * 계속해서 state값을 사용할 수 있는 것이다.
   */
}`}
          </code>
        </pre>
      </div>
      <button onClick={handleClick}>리액트 클로저 테스트</button>
      <strong>
        <p>{state}</p>
      </strong>
      <button onClick={reset}>리셋</button>
    </>
  );
};

export default ClosurePage;
