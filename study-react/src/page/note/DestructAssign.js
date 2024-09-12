/** 구조 분해 할당 */

// // 배열
// const array = [1, 2, 3, 4, 5];
// const [first, second, third, ...arrayRest] = array;
// console.log(first); // 1
// console.log(second); // 2
// console.log(third); // 3
// console.log(arrayRest); // [4, 5]

// 객체
const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
const { a, b, c, ...objectRest } = object;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(objectRest); //{d: 4, e: 5}

const ob = { a: 1, b: 2 };
const { a: first, b: second } = ob;
console.log(first);
console.log(second);
