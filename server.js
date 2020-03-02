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
  return res.render("about");
})

server.get("/courses", function (req, res){
  return res.render("courses");
})


server.listen(3333, function(){
  console.log('Server is RUNNING');
})