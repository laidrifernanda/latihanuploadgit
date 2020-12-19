const express = require('express');
const app = express();
const port = 5000;

app.get('/', function(req, res){
  res.send('Hello My name is Fernanda but from ger');
});

app.post("/", function (req, res) {
  res.send("Hello My name is Fernanda but from post");
});

app.put("/", function (req, res) {
  res.send("Hello My name is Fernanda but from put");
});

app.delete("/", function (req, res) {
  res.send("Hello My name is Fernanda but from delete");
});

app.listen(port, function(){
  console.log('Hello my apps is running on port '+port);
});