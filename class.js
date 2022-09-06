class Person {
  constructor(name, first, second) {
    // 함수 이름을 constructor정하는 것은 약속이다. 약속크^^
    this.name = name;
    this.first = first;
    this.second = second;
  }
}

const lee = new Person("채욱", 10, 20);
console.log("lee", lee);
//lee Person { name: "채욱", first: 10, second: 20 }
