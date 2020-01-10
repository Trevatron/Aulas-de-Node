var express = require('express');
var app= express();
app.get('/', function(req,res){
    res.send ("<html><body>  Programador Full Stack </body></html>");
});
app.get('/back-end', function(req,res){
    res.send("");
});
app.get('/infraestrutura', function(req,res){
    res.send("<html><body> Azure Cloud, Linux, MySQL Server... </body></html>");
});
app.listen(3004, function(){
    console.log ("Servidor rodando com Express");
});
