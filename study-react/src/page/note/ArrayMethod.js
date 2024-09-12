/**
 * Array.prototype.method?
 * map, filter, reduce, forEach
 */

/**
 * Array.prototype.map
 * 인수로 전달받은 배열과 똑같은 길이의 새로운 배열을 반환하는 메소드
 * 배열의 각 아이템을 순회하면서 각 아이템을 콜백으로 연산한 결과로 구성된 새로운 배열을 만듬
 *  */
const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map((item) => item * 2);
console.log(doubleArr);

/**
 * Array.prototype.filter
 * 콜백 함수를 인수로 받는데, 이 콜백 함수에서 truthy 조건을 만족하는 경우에만 해당 원소를 반환하는 메소드
 * 말 그대로 필터링 하는 역할, filter의 결과에 따라 원본 배열의 길이 이하의 새로운 배열이 반환
 */
const arr2 = [1, 2, 3, 4, 5];
const evenArr = arr2.filter((item) => item % 2 === 0);
console.log(evenArr);

/**
 * Array.prototype.reduce
 * 콜백함수와 함께 초깃값을 추가로 인수를 받는다. 이 초깃값에 따라 배열이나 객체, 또는 그 외의 다 른 무언가를 반환할 수 있다.
 * 콜백 함수를 실행하고, 이를 초깃값에 누적해 결과를 반환
 */
const arr3 = [1, 2, 3, 4, 5];
const sum = arr.reduce((result, item) => {
  return result + item;
});
