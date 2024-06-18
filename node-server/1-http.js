const http = require("http");
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
    res.write("<html></html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>Welcome!</h1></body>");
    res.write("</html");
  } else if (url === "/Courses") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html></html>");
    res.write("<head><title>Hello</title></head>");
    res.write("<body><h1>Courses</h1></body>");
    res.write("</html");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html></html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>Not F</h1></body>");
    res.write("</html");
  }
  res.end();
});

server.listen(8080);
