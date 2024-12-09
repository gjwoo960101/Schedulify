const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res)=>{
    const filePath = path.join(__dirname,'without-redux.html');

    fs.readFile(filePath, (err,data) =>{
        if(err){
            res.writeHead(500,{'content-Type' : 'text/plain'});
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(data);
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})