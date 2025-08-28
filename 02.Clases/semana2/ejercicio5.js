const { ask } = require('../helpers/input');



async function main() {
    let opcion = '';
    let edades =[];     

    while (opcion !== '3') {
        opcion = await ask('Elige una opción:\n1. Agregar edad\n2. Mostrar analisis\n3. Salir\n');
        if (opcion === '1') {
            if (opcion === '1') {
                const edad = Number(await ask('Que edad vas a ingresar: '));
                edades.push(edadNueva);
            }else if (opcion === '2') {
                let mayores = 0;
                for (let i = 0; i < edades.length; i++) {
                    if (edades[i] >= 18) {
                        mayores++;
                    }
                }
                console.log (`De un total de  ${edades.length} edades, ${mayores} son personas mayores de edad.`);
            }else if (opcion === '3') {
                console.log('Gracias por usar el programa');
            }else {
                console.log('Opción inválida, por favor elige una opción válida');

                                    }
                                }
                            }

return;
}

main();
