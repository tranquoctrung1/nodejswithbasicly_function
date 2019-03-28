var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + "/readme.txt",{
    encoding : "utf8",
    highWaterMark: 16 * 1024 // 16KB
})

var writeable = fs.createWriteStream(__dirname + "/readmecopy.txt")
var compressed = fs.createWriteStream(__dirname + "/testzlib.txt.rar");


// readable.on("data",(chunk) =>
// {
//     console.log(chunk);
//     writeable.write(chunk);
// })

// create the stream extra 
var zlip = zlib.createGzip()

//pipe 

//copy data from readable to writeable 
readable.pipe(writeable);

//extra file 

readable.pipe(zlip).pipe(compressed);
