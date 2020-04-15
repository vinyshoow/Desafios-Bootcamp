const express = require('express');
const routes = express.Router();
const cursos = require('./data');

routes.get("/", function (req, res){
  return res.render("home");
})

routes.get("/about", function (req, res){
  return res.render("about");
})

routes.get("/courses", function (req, res){
 
  return res.render("courses", { items: cursos });
})

routes.get("/description", function(req, res){
  const id = req.query.id;
  
  const curso = cursos.find(function(curso){
    return curso.id == id;
  })

  if(!curso) {
    res.send('Course not-found');
  }
  return res.render("description", {item: curso});
})

routes.use(function(req,res){
  res.status(404).render("not-found");
})

module.exports = routes;