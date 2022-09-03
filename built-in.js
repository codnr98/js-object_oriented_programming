console.log("Math.PI", Math.PI);
console.log("Math.floor(3.9)", Math.floor(3.9)); // 객체에 소속되어있는 함수는 보통 method라고 부른다.
console.log("Math.random()", Math.random());
//Math.은 수학과 관련된 변수들을 구룹핑해서 정리한 것
//수학뿐만아니라 날짜 문자 관련된 수많은 기능들도 있다 그 많은것들을 정리 안된상태로 우리에게 재공된다면 혼란스러울 것이다 그래서 개발자들은 객체를 통해 정리된 데이터를 재공하게된다.

const MyMath = {
  PI: Math.PI,
  random: () => {
    return Math.random();
  },
  floor: (let) => {
    return Math.floor(let);
  },
};

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random", MyMath.random());
console.log("MyMath.floor(9.3)", MyMath.floor(9.3));
