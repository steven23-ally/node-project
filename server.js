const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello node</h1>\n");
  res.end();
});
server.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});






fs.writeFileSync('welcome.txt', 'Hello Node');


const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
