
//The first line that we have is const http; here, we're just defining a variable called http, and we're defining this
// variable as a constant because it not will change.
//We're then setting the variable to require('http') to include the http module. Whenever you see require, remember
// that it's either including a module or another file.
const http = require('http');
//Next, we have the hostname and port constants (our hostname will be our localhost), and then, port is 3000.

const hostname = 'localhost';

const port = 3000;

//We'll take that http module and use the createServer method or the createServer function; this takes in a 
 
const server = http.createServer((req, res) => {
  //request (req) and response (res) parameter.
  // we'll use the writeHead method of the response and give it a status of 200,
  res.statusCode = 200;//which mean that everything is ok
 // we're also setting the Content-Type to text/plain. Then, we will end the response and print 
  //Hello World in the browser. Then we have to enter .listen and pass the port and hostname name. 
 res.setHeader('Content-Type', 'text/plain');
 //happens, we can use console.log, letting the user know that the server is running.
  res.end('Hello world\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});