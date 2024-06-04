console.log("Logging...");
console.clear();

// log level
console.log("log"); // 개발
console.log("info"); // 정보
console.log("warn"); // 경보
console.log("error"); // 에러, 사용자 에러, 시스템 에러

// assert
// 첫 번째 인자로 전달한 값이 true가 아닐때만 출력
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "kevin", age: 27, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
// 성능 확인할 때 유용
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
// 내가 작성한 함수가 내가 예상한 만큼 작동이 되었는지 확인(몇 번 호출되었는지)
function a() {
  console.count("a function");
}
a();
console.countReset("a function"); // 카운트 리셋
a();

// trace
// 어디에서 이 함수를 호출했는지 확인할 때 유용
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
