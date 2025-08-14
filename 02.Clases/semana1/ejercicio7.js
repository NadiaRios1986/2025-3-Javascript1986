const { ask } = require('../helpers/input.js');

async function main() {
    const number = Number(await ask("Ingresa un número: "));

    if (number % 3 !== 0 && number % 5 !== 0) {
        console.log("El número no es múltiplo de 3 ni de 5");
    } else if (number % 3 === 0 && number % 5 !== 0) {
        console.log("El número es múltiplo de 3");
    } else if (number % 5 === 0 && number % 3 !== 0) {
        console.log("El número es múltiplo de 5");
    } else  {
        console.log("El número es múltiplo de 3 y de 5");
    }
}

main();