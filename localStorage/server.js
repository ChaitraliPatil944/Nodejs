var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var staticFolderMiddleware = express.static(path.join(__dirname,"public"));
app.use(staticFolderMiddleware);

app.get("/", (req , res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
}); 

app.post("/login",(req , res)=>{
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.post("/register",(req , res)=>{
    res.sendFile(path.join(__dirname + '/register.html'));
});

app.listen(9999);
console.log("Server is listening on port 9999");