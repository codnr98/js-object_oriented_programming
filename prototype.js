const kim = {
  name: "kim",
  first: 10,
  second: 20,
  third: 30,
  sum: function () {
    return this.first + this.second;
  },
};
const lee = {
  name: "Lee",
  first: 10,
  second: 20,
  third: 10,
  sum: function () {
    return this.first + this.second;
  },
};
// this는 메소드가 자신이 속해있는 객체를 가리키는 특수한 키워드

console.log("kim.sum(kim.first,kim.second)", kim.sum()); // 함수의 인자로 한번더 언급하고있다.
console.log("lee.sum(lee.first,lee.second)", lee.sum()); // 함수의 인자로 한번더 언급하고있다.
//수정작업을 할때 같은 형식의 개체를 하나하나 수정해야하는 번거로움이 있다.
//같은형식의 객체를 찍어내보자.

const d1 = new Date("2022-9-3");
console.log("d1.getFullYear()", d1.getFullYear());
// new Date() constructor의 실 사례이다

// prototype 한국어로 원형 자바스크립트를 프로토타입 베이스드 렝귀지라고 도 부른다
