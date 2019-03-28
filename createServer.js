var http = require('http');

var fs = require('fs');

http.createServer((req,res) =>
{
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    var url = req.url;

    if(url == '/' || url === "/index.html")
    {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;

        fs.createReadStream(__dirname +"/index.html","utf8").pipe(res)
    }
    else if(url === '/api')
    {
        var obj = {
            fistName: "Trần Quôc",
            lastName: "Trung",
        }

        res.write(JSON.stringify(obj));

        res.end();
    
    }
    else{
        res.statusCode = 404;
        res.end("Not Found");
    }
}).listen(3000,null,() =>
{
    console.log("Server Connected. Server is listening on port: http://localhost:3000");
})