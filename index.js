var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World with Nodejs!');
});

app.listen(8080, function() {
  console.log('This app listening on port 3000!');
});
