import React from "react";

const AsyncPage = () => {
  //   console.log(1);
  //   setTimeout(() => {
  //     console.log(2);
  //   }, 0);
  //   setTimeout(() => {
  //     console.log(3);
  //   }, 100);
  //   console.log(4);

  //   const bar = () => {
  //     console.log("bar");
  //   };
  //   const baz = () => {
  //     console.log("baz");
  //   };
  //   const foo = () => {
  //     console.log("foo");
  //     bar();
  //     baz();
  //   };
  //   foo();
  /**
   * 호출스택은 js 에서 수행해야 할 코드나 함수를 순차적으로 담아두는 스택이다.
   * 1. foo()가 호출
   * 2. foo 내부에 console.log가 존재하므로 호출 스택에 들어간다
   * 3. 2.실행이 완료된 이우에 다음 코드로 넘어간다. (아직 foo()는 존재)
   * 4. bar()가 호출 스택에 들어간다.
   * 5. bar 내부의 console.log가 존재하므로 호출스택에 들어간다.
   * 6. 5.실행이 완료된 이우에 다음코드로 넘어간다. (아직 foo(), bar()는 존재)
   * 7. 더 이상 bar()에 남은 것이 없으므로 호출 스택에서 제거된다. (아직 foo() 존재)
   * 8. baz()가 호출 스택에 들어간다.
   * 9. baz 내부의 console.log가 존재하므로 호출스택에 들어간다.
   * 10. 9.실행이 완료된 이우 다음코드로 넘어간다. (foo(), baz()는 존재)
   * 11. 더 이상 baz에 남은 것이 없으므로 호출 스택에서 제거된다.(아직 foo()는 존재)
   * 12. 더 이상 foo()에 남은 것이 없으므로 호출 스택에서 제거 된다.
   * 13. 이제 호출 스택이 완전히 비워졌다.
   *
   * 이렇게 호출 스택이 비어 있는지 여부를 확인하는 것이 이벤트 루프다.
   * 이벤트 루프는 단순히 이벤트 루프만의 단일 스레드 내부에서 이 호출 스택 내부에 수행해야 할 작업이 있는지 확인하고,
   * 수행해야 할 코드가 있다면 js 엔진을 이용해 실행한다.
   *
   * 한가지 알아둘 점은 '코드를 실행하는 것'과 '호출 스택이 비어 있는지 확인하는 것' 모두가 단일 스레드에서 일어난다.
   * 즉, 두 작업은 동시에 일어날 수 없으면 한 스레드에서 순차적으로 일어난다.
   */

  const foo = () => {
    console.log("foo");
  };
  const bar = () => {
    console.log("bar");
  };
  const baz = () => {
    console.log("baz");
  };
  setTimeout(foo, 0);
  Promise.resolve().then(bar).then(baz);
  return <></>;
};

export default AsyncPage;
