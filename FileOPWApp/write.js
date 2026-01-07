var fs=require("fs");
var filePath="./result.txt";

var datatobeWritten ="This is the data to be written to the file.";

var onFileWrite= function(err){
    if(err){
        console.log("Error writing file: ", err);
    } else {
        console.log("File written successfully.");
    }
}

fs.writeFile(filePath, datatobeWritten, onFileWrite);
