//forma de importar el archivo
const figuras = require('./collectibles');


//variables que contienen los arrays de figuras
let hotToys = figuras("Hot Toys");
let bandai = figuras("Bandai");
let starWars = figuras("Star Wars");


//Array donde se encuentran todas las fiuras
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles,

    listfigures: function(){
        this.figuras.forEach(function(figura){
            console.log(figura);
        })
    },

    figuresByBand: function(marca){
        return this.figuras.filter(function(figura){
            return figura.marca == marca;
        })
    }
}



//console.log(collectibles.listfigures());
console.log(collectibles.figuresByBand("Hot Toys"));