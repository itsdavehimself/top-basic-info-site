const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
      }
    })
  } else if (req.url === '/about') {
      fs.readFile('about.html', 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          return;
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
        }
      })
  } else if (req.url === '/contact') {
    fs.readFile('contact-me.html', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })

  } else {
    fs.readFile('404.html', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })

  }
}).listen(8080);