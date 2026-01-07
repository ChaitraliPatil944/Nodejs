var express=require('express');
var path=require('path');
var app=express();  //get global object from framework
                    //global object contains HTTP server
var staticFolder=express.static(path.join(__dirname, "public"));
//Express Framework Configuration
app.use(staticFolder);
app.get("/",(request,response)=>{
    response.sendFile(__dirname +"/index.html");
})

app.listen(9999);
console.log('Server is running on port 9999');
