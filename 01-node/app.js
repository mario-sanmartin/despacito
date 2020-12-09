const {familia, dinero} = require('./familia')
const cowsay = require('cowsay');


console.log(cowsay.say({
    text: "Hola Sauron bienvenido",
    e: "xO",
    T: "W "
}));

familia.forEach(item => {
    // console.log(element)
    console.count(item);
});

console.log('Mi sueldo es de : ',dinero);