import React from "react";

const ClosurePage2 = () => {
  const counter = () => {
    var counter = 0;
    return {
      increase: function () {
        return ++counter;
      },
      decrease: function () {
        return --counter;
      },
      counter: function () {
        console.log("counter 접근");
        return counter;
      },
    };
  };
  var c = counter();
  console.log(c.increase());
  console.log(c.increase());
  console.log(c.increase());
  console.log(c.decrease());
  console.log(c.counter());

  /**
   * 5만 출력 되는 이유
   * i가 전역변수로 작동 했기 때문,
   * js 는 기본적으로 함수레벨 스코프를 다르고 있기 때문에 var는 for문의 존재와 상관없이 해당 구문이 선언된 함수 레벨 스코프를
   * 바라보고 있으므로 함수 내부 실행이 아니라면 전역 스코프에 var i 가 등록돼 있을것
   * for문을 다 순회한 이후, 태스크 큐에 있는 setTimeout을 실행하려고 했을때, 이미 전역 레벨에 있는 i 는 5로 업데이트 되어 있다.
   * 이를 올바르게 수정하는 방법은
   * 1. 블록레벨 스코프를 갖는 let으로 수정
   * 2. 클로저를 제대로 사용
   */
  //   for (var i = 0; i < 5; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, i * 1000);
  //   }
  //   for (let j = 0; j < 5; j++) {
  //     setTimeout(function () {
  //       console.log(j);
  //     }, j * 1000);
  //   }

  for (var i = 0; i < 5; i++) {
    setTimeout(
      (function (sec) {
        return function () {
          console.log(sec);
        };
      })(i),
      i * 1000
    );
  }
  return (
    <div>
      <pre>
        <code>
          {`const counter = () => {
    var counter = 0;
    return {
      increase: function () {
        return ++counter;
      },
      decrease: function () {
        return --counter;
      },
      counter: function () {
        console.log("counter 접근");
        return counter;
      },
    };
  };
  var c = counter();
  console.log(c.increase());
  console.log(c.increase());
  console.log(c.increase());
  console.log(c.decrease());
  console.log(c.counter());

  /**
   * 5만 출력 되는 이유
   * i가 전역변수로 작동 했기 때문,
   * js 는 기본적으로 함수레벨 스코프를 다르고 있기 때문에 var는 for문의 존재와 상관없이 해당 구문이 선언된 함수 레벨 스코프를
   * 바라보고 있으므로 함수 내부 실행이 아니라면 전역 스코프에 var i 가 등록돼 있을것
   * for문을 다 순회한 이후, 태스크 큐에 있는 setTimeout을 실행하려고 했을때, 이미 전역 레벨에 있는 i 는 5로 업데이트 되어 있다.
   * 이를 올바르게 수정하는 방법은
   * 1. 블록레벨 스코프를 갖는 let으로 수정
   * 2. 클로저를 제대로 사용
   */
  //   for (var i = 0; i < 5; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, i * 1000);
  //   }
  //   for (let j = 0; j < 5; j++) {
  //     setTimeout(function () {
  //       console.log(j);
  //     }, j * 1000);
  //   }

  for (var i = 0; i < 5; i++) {
    setTimeout(
      (function (sec) {
        return function () {
          console.log(sec);
        };
      })(i),
      i * 1000
    );
  }
  
******************************************************************
콘솔로그 확인
  `}
        </code>
      </pre>
    </div>
  );
};

export default ClosurePage2;
