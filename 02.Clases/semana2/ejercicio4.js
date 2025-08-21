const { ask } = require('../helpers/input.js');

function obtenerPromedio(numero) {
    let total=0;
    for (let i = 0; i < numero.length; i++) {
        total=total + numero[i];

    }

    const promedio = total / numero.length;
    
    return promedio;
}




async function main() {
    const edades = [18, 20, 25, 30, 35];
    const lista = [5,20,30,40,50];
    const datos = [70,80,90,100,110 ];
    const nombres = ["Juan", "Ana", "Pedro", "Maria", "Luis"];
    
    console.log(`El promedio de edades es = ${obtenerPromedio(edades)}`);



}

main();