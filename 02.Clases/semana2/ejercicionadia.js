const { ask } = require('../helpers/input.js');

function obtenerPromedio(numero) {
    let total=0;
    for (let i = 0; i < numero.length; i++) {
        total=total + numero[i];

    }

    const promedio = total / numero.length;
    
    return promedio;
}

function obtenerMayor(numero) {
    let mayor = numero[0];
    for (let i = 1; i < numero.length; i++) {
        if (numero[i] > mayor) {
            mayor = numero[i];
        }
    }
return mayor;
}

function obtenerMenor(numero) {
    let menor = numero[0];
    for (let i = 1; i < numero.length; i++) {
        if (numero[i] < menor) {
            menor = numero[i];
        }
    }
return menor;
}

function resumenEstadistico(numeros) {
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);

    return {
        promedio: promedio,
        mayor: mayor,
        menor: menor
    };
}    
async function main() {
    const edades = [18, 20, 25, 30, 35];
    const lista = [5,20,30,40,50];
    const datos = [70,80,90,100,110 ];
    const nombres = ["Juan", "Ana", "Pedro", "Maria", "Luis"];
    
    console.log(`El promedio de edades es = ${obtenerPromedio(edades)}`);
     console.log(`El numero mayor de: ${lista} es = ${obtenerMayor(lista)}`);
     console.log(`El numero menor de: ${lista} es = ${obtenerMenor(lista)}`);
     const estadisticas = resumenEstadistico(datos);
     console.log(`Promedio: ${estadisticas.promedio}`);
     console.log(`Mayor:${estadisticas.mayor}`);
        console.log(`Menor: ${estadisticas.menor}`);


}

main();