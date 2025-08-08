const http=require('http');
const server= http.createServer((request,result)=>{
    result.writeHead(200,{'Content-Type':'text/plain'});
    result.end('Hello this is my node js server!\n');
});
const port=3000;
server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
