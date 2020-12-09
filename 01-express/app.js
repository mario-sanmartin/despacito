const express = require('express');

const app = express();

const puerto = 3000;

//Middleware
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.send('Mi respuesta desde Express')
})

app.get('/servicios',(req,res)=>{
    res.send('Estas en la seccion de Servicios')
})

//Para que se ejecuten todas las rutas configuradas
app.use((req,res,next) => {
    res.status(404).sendFile(__dirname+'/public/404.html')
})

app.listen(puerto,()=>{
    console.log('Servidor a su servicio reina',puerto);
})