
function importar(marca){
    let figuras;
    switch(marca){
        case "Hot Toys":
            figuras = require('./figura1.json');
            break;
        case "Bandai":
            figuras = require('./figura2.json');
            break;
        case "Star Wars":
            figuras = require('./figura3.json');
            break;
        default:console.log("No existe esa marca de figuras");
    }
    return figuras;
}

//forma de expotar el archivo
module.exports = importar;