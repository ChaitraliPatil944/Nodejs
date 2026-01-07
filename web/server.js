// this file will contain logic for the http server and abou express

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// bodyParser was needed before , this version of express do not need it 

//app.use(urlencoded({extended:true}));
//app.use(express.json());

var staticFolderMiddleware = express.static(path.join(__dirname,"public"));
app.use(staticFolderMiddleware);

// 3 middleWares are configured here
//      - encoding
//      - extracting json data
//      - static resoure holder path
// 3 http request Handlers
//      1 GET handler
//      2 POST handler


app.get("/", (req , res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
}); // always mapped to some url and handels the http requests



//REST API : Programmable  Logic access via HTTP verbs using any third party application


app.post("/login",(request , response)=>{
    console.log(request.body);
    var user = request.body;
    if(user.email=="saijagdale@gmail.com" && 
       user.password=="Sai123"){
       response.send("Welcome");
    }
    else{
        response.send("Invalid User");
    }
    console.log("Login form is posted by browser is secived at server");
});

app.post("/register",(request , response)=>{
    console.log(request.body);
    console.log("Register form is posted by browser is secived at server for registration of new user")
});

app.listen(9000);
console.log("Website is being hosted on port no 9000")
