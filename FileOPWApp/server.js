var http=require("http");  //step 1
var fs=require("fs");  //step 2

var onReqHandler=function(req, res){    //step 4
    var pathname=("./data/"+req.url);

fs.readFile(pathname,(err, data)=>{    //step 5
    if(err){
        console.log("something went wrong");
        console.log(err);
        res.writeHead(404,{"Content-Type":"text/html"});
    } else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data.toString());

}
res.end();
}); 
};

var server=http.createServer(onReqHandler);    //step 3
server.listen(2109);                           //step 6
console.log("Server listening on port 2109");