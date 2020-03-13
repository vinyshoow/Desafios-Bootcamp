// npm init -y
// npm install express
// npm install -D nodemon
// npm install nunjucks

const express = require('express');
const nunjucks = require('nunjucks');
const cursos = require('./data');

const server = express();

server.use(express.static('css'));



server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server
})


server.get("/", function (req, res){
  return res.render("home");
})

server.get("/about", function (req, res){
  return res.render("about");
})

server.get("/courses", function (req, res){
  return res.render("courses", { items: cursos});
})

server.use(function(req,res){
  res.status(404).render("not-found")
})


server.listen(3333, function(){
  console.log('Server is RUNNING');
})