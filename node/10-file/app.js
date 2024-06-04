const fs = require("fs");

// 3
// rename(...., callback(error, data))
// try {renameSync(....)} catch(e) { }
// promise.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log(error);
}

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});

console.log("hello");

fs.promises
  .rename("./text.txt", "./text-neww.txt")
  .then(() => {
    console.log("Done!");
  })
  .catch(console.error);
