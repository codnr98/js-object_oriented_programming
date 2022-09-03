const lee = {
  name: "Lee",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
// this는 메소드가 자신이 속해있는 객체를 가리키는 특수한 키워드

console.log("lee.sum(lee.first,lee.second)", lee.sum()); // 함수의 인자로 한번더 언급하고있다.
