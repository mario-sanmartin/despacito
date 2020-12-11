const express = require('express');

const app = express();

// const puerto = 3000;
const port = process.env.PORT || 3000;


//Motor de plantilla
app.set("view engine","ejs")
app.set('views',__dirname + '/views')


//Middleware
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.render("index",{titulo: "Mi titulo dinamico"})
})

app.get('/info',(req,res)=>{
    res.render("info",{tituloInfo: "Este si he un peazo e titulo"})
})

app.get('/poto',(req,res)=>{
    res.render("poto",{tituloPoto: "Pero que chucha"})
})
//Para que se ejecuten todas las rutas configuradas
app.use((req,res,next) => {
    res.status(404).render("404",{
        titulo: "error 404",
        descripcion: "Titulo recontra comunista"
    })
})

///ni idea


app.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
});
