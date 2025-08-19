const { ask } = require('../helpers/input.js');

async function main(){
    let opcion= "";

    let frutas="";


    opcion= await ask("¿Qué deseas hacer? \n1. Agregar una fruta \n2. Eliminar una fruta \n3. Salir \nElige una opción: ");
    while (opcion !== "3") {
        if(opcion === "1") {
            let frutaNueva = await ask("¿Qué fruta quieres agregar? ");
            frutas.push(frutaNueva);
            console.log("Fruta agregada: ",frutaNueva);

            console.log("Frutas disponibles", frutas);
       }else if (opcion === "2") {
        let frutaEliminar = await ask("¿Qué fruta quieres eliminar? ");
      
            console.log("No hay frutas ");
            continue


        }else if (opcion === "3") {
        console.log("Saliendo del programa...");


        }else {
            console.log("Opción no válida, por favor elige una opción del menú.");
        }       
}
}

main();
