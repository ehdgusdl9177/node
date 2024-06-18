const http = require("http");
const fs = require("fs");
// const http2 = require("http2"); // https

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incomming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/Courses") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/not-found.html").pipe(res);
  }
  res.end();
});

server.listen(8080);
