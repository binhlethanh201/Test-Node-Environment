// Khai bao 1 module 'http' -> tao 1 websever
const http = require("http");
const { console } = require("inspector");

// Khai bao cac thong so cua webserver
const serverName = "localhost";
const portNumber = 3000;

// Khoi tao 1 web server
const server = http.createServer((req,res) =>{
    // Thiet lap cac thong so cua goi tin HttpResponse
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    //Tra ve cho Client 1 content tu Server
    res.end("Hello!");
});

//Kich hoat web server de lang nghe cac request tu client
server.listen(portNumber, serverName, ()=>{
    console.log("Web server running at: http://" + serverName + ":" +portNumber);
});