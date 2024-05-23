function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("----- class -----");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log("--- global scope ---");
console.log(this);
console.log(this === module.exports);

// 브라우저에서 밖에서 쓰이는 this는 global을 가리킴
// Node에서 this는 모듈에 있는 exports를 가리킴
