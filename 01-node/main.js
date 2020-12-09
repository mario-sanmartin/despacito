const http = require('http');

const server = http.createServer((req,res)=> {
   
    res.end('Estoy respondiendo a la solicitud V.2')
})

const puerto = 3000;
server.listen(puerto,()=>{
    console.log('Escuchando cumbia')
})