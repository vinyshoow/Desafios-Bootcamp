// npm init -y
// npm install express
// npm install -D nodemon
// npm install nunjucks

const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

server.use(express.static('css'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true

})

server.listen(3333);