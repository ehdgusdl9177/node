const os = require("os");

console.log(os.EOL === "\n"); // mac  줄바꿈
console.log(os.EOL === "\r\n"); // window 줄바꿈

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
