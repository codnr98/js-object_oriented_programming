const memberArray = ["채욱", "재현", "석원"];
//데이터의 자세한 정보가 필요할 때가 있다.
console.log("memberArray[0]", memberArray[0]);

const memberObject = {
  개발자: "채욱",
  회계사: "재현",
  기획자: "석원",
};

console.log("memberObject.개발자", memberObject.개발자);
memberObject.기획자 = "민재";
console.log(memberObject.기획자);
