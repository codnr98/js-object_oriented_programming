function Person(name, first, second, third) {
  //constructor의 변수명은 첫 알파벳을 대문자로 작성한다.
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

Person.prototype.sum = function () {
  return "prototype: " + (this.first + this.second);
};

//비슷한 형태의 객체를 constructor를 통해 한번에 수정 하여 불필요한 반복작업을 줄일 수 있다.
const kim = new Person("kim", 10, 20, 10);
const lee = new Person("lee", 40, 20, 20);

console.log("kim.sum(kim.first,kim.second)", kim.sum());
console.log("lee.sum(lee.first,lee.second)", lee.sum());
//수정작업을 할때 같은 형식의 개체를 하나하나 수정해야하는 번거로움이 있다.
//같은형식의 객체를 찍어내보자.
