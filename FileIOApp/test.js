//code for reading file 

var fs=require("fs");
var filename="./data/chait.txt";

var onFileRead=function(err,data){
    if(err){
        console.log("Error reading file:",err);
    }else{
        console.log("File contents:",data.toString());
    }
};

fs.readFile(filename,onFileRead);

console.log("terminating program");  //executes first
