const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  })
})

app.get('/about', (req, res) => {
  fs.readFile('about.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  })
})

app.get('/contact', (req, res) => {
  fs.readFile('contact-me.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  })
})

app.use((req, res) => {
  fs.readFile('404.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    }
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})