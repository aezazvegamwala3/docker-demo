const http = require("http");
const port = process.env.PORT || 80;
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("Hello from ECS pulling image from JFrog Artifactory (GitHub + CodeBuild)!\n");
}).listen(port);
console.log(`Listening on ${port}`);
