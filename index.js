const _ = require('lodash')
const http = require('http');
const fs = require('fs');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;
const dirName = './public'

const mimes = {
  js: 'text/javascript',
  css: 'text/css',
  html: 'text/html'
}

function getContentType(path){
  type = _.last(path.split('.'))
  return mimes[type];
}

const server = http.createServer((request, response) => {
  pathName = url.parse(request.url).pathname;
  if (pathName === "/")
    pathName = "/index.html";

  var fullPath = `${dirName}${pathName}`
  console.log(fullPath)

  fs.readFile(fullPath, function (err, data) {
    if (!err) {
      response.writeHead(200, { 'Content-Type': getContentType(fullPath) });
      response.write(data);
      response.end();
    } else {
      response.writeHead(404, { 'Content-type': 'text/plan' });
      response.write('Page Was Not Found');
      response.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});