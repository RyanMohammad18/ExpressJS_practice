const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello Programmers');
        res.write('How ae you doing');
        res.end();


    } else if(req.url === '/about'){
        res.write('This is about page');
       
        res.end();

    }else{
        res.write('error page');
       
        res.end();

    }
 

});



server.listen(3000)

console.log('listening on port 3000')