//2. Crear un array de números y asignarle un total de diez (10) valores numéricos.
let numeros = [1,2,3,7,8,9,13,14,15,19];

/*3. Crear variables que contengan los valores numéricos dispuestos en el array en la
posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array. Utiliza
los recursos aprendidos en esta clase: Destructuring y Spread operator.*/

let [posicion0, ,posicion2, ,posicion4, ...resto] = numeros;

console.log(posicion0);
console.log(posicion2);
console.log(posicion4);
console.log(resto);

/*4. Crear un objeto literal para almacenar los datos de nuestra mascota*/

let mascota ={
    nombre: "Tomy",
    tipo: "perro",
    color: "negro",
    raza: "mestizo"
}

let {nombre,tipo,color,raza}= mascota;

console.log(`Hola, les presento a mi mascota, su nombre es ${nombre}, es un hermoso ${tipo}, de color ${color} y su raza es ${raza}`);