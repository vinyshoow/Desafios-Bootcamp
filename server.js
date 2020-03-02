// npm init -y
// npm install express
// npm install -D nodemon
// npm install nunjucks

const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('css'));

server.set("view engine", "html");

nunjucks.configure("views", {
  express:server
})

server.get("/", function (req, res){
  return res.render("desafio2-1");
})

server.get("/desafio2-2", function (req, res){
  return res.render("desafio2-2");
})

server.listen(3333, function(){
  console.log('Server is RUNNING');
})