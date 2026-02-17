import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res)=>{

  res.writeHead(200, {"content-type":'text/plain'});

  console.log(req.method);
  console.log(req.headers);
  console.log(req.url);

  res.end('Hello World\n');
});

server.listen(PORT, 'localhost', ()=>{
  console.log(`Server up and running at port no. ${PORT}`);
});