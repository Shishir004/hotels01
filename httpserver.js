const http=require('http');
const port=process.env.Port;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html')
    res.end('<h1>Hello my name is shishir</h1>')
})
server.listen(port,()=>{
    console.log('listening')
})