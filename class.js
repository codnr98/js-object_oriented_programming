class Person {
  constructor(name, first, second) {
    // 함수 이름을 constructor정하는 것은 약속이다. 약속크^^
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "prototype : " + (this.first + this.second);
  }
}
//메소드 변경법 그냥 복붙
// Person.prototype.sum = function () {
//   return "prototype: " + (this.first + this.second);
// };

const lee = new Person("채욱", 10, 20);
console.log("lee", lee.sum());
//lee Person { name: "채욱", first: 10, second: 20 }
