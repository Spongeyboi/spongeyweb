const express = require("express");
  var path = require('path');

  const app = express();
  app.engine('.html', require('ejs').__express);
  app.set('views', path.join(__dirname, 'views'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('view engine', 'html');

app.get("/",(req,res)=>{
  res.render("index");
})

app.get("/server",(req,res)=>{
  res.render("server");
})
app.get("/malo",(req,res)=>{
  res.render("malo");
})

app.listen(3000);