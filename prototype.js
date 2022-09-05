function Person(name, first, second, third) {
  //constructor의 변수명은 첫 알파벳을 대문자로 작성한다.
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

const kim = new Person("kim", 10, 20, 10);
const lee = new Person("lee", 40, 20, 20);
console.log("kim.sum(kim.first,kim.second)", kim.sum());
console.log("lee.sum(lee.first,lee.second)", lee.sum());

// prototype 한국어로 원형 자바스크립트를 프로토타입 베이스드 렝귀지라고 도 부른다 Prototype Based Language
