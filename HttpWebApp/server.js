var http=require("http");

var person={
    firstName:"Chaitrali",
    lastName:"Patil",
    age:20
}

var people=[
    {firstName:"Chaitrali",lastName:"Patil",age:20},
    {firstName:"Arnav",lastName:"Tolahunase",age:22},
    {firstName:"Sai",lastName:"Jagdale",age:30},
     
    {firstName:"Sam",lastName:"Rasal",age:25}
];



var onRequestHandler=function(request,response){
    console.log("Request is received...");
    response.writeHead(200,{"Content-Type":"text/json"});  //PACKAGE HEAD
    response.write(JSON.stringify(people));
    response.end();

}




var server=http.createServer(onRequestHandler);
server.listen(9797);

console.log("Server is ready to accept connections on port 9797");