const express = require('express');

const app = express();

const puerto = 3000;

app.get('/',(req,res)=>{
    res.send('Mi respuesta desde Express')
})

app.get('/servicios',(req,res)=>{
    res.send('Estas en la seccion de Servicios')
})

app.listen(puerto,()=>{
    console.log('Servidor a su servicio reina',puerto);
})