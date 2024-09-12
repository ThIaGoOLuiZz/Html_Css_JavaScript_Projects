function calculaAreaRetangulo(largura, altura) {
    return largura * altura;
}

function verificaNumeroPar(numero) {
    return numero % 2 === 0;
}

function convertePolegadasEmCentimetros(polegadas) {
    return polegadas * 2.54;
}

function calculaIMC(peso, altura) {
    return peso / (altura * altura);
}

function converteParaMinusculas(texto) {
    return texto.toLowerCase();
}

const multiplicaPorDez = (numero) => numero * 10;

console.log(calculaAreaRetangulo(5, 10));
console.log(verificaNumeroPar(4));
console.log(verificaNumeroPar(7));
console.log(convertePolegadasEmCentimetros(10));
console.log(calculaIMC(70, 1.75));
console.log(converteParaMinusculas("HELLO WORLD"));
console.log(multiplicaPorDez(5));