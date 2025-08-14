const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate) {
    const diff= actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    return edadEnDias;
}

function diffMonth(actualDate, birthDate) {
      const diff= actualDate - birthDate;
    const edadEnMeses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    return edadEnMeses;
}

function diffYear(actualDate, birthDate) {
      const diff= actualDate - birthDate;
    const edadEnAños = Math.floor(diff / (1000 * 60 * 60 * 24 * 30* 12));
    return edadEnAños;
}


async function main() {

    const actualDate = new Date();

    const birthDateDay =  Number (await ask("¿Cuál es el día de tu fecha de nacimiento?"));
    const birthDateMonth = Number (await ask("¿Cuál es el mes de tu fecha de nacimiento?"));
    const birthDateYear = Number (await ask("¿Cuál es el año de tu fecha de nacimiento?"));

    const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

    console.log('Has vivido aproximadamente');
    console.log(`${diffDays(actualDate, birthDate)} dias.`);
    console.log(`${diffMonth(actualDate, birthDate)} meses.`);
    console.log(`${diffYear(actualDate, birthDate)} años.`);
}
main();