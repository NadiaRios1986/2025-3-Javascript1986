const { ask } = require('../helpers/input.js');

async function main() {

    const temperatura = Number(await ask("¿Cuál es la temperatura actual?"));

    if (temperatura < 10) {
        console.log("Hace frío");
    } else if (temperatura >= 10 && temperatura <20) {
        console.log("Esta templado");
     } else if (temperatura >= 20 && temperatura <30) {
        console.log("HACE CALOR");
        } else if (temperatura =>30 && temperatura <=40) {
        console.log("HACE MUCHO CALOR");

}
}

main();
