let nota = 6.5;
let classificacao;

switch (true) {
    case (nota < 6):
        classificacao = "Reprovado";
        break;
    case (nota >= 6 && nota <= 7):
        classificacao = "Recuperação";
        break;
    case (nota > 7):
        classificacao = "Aprovado";
        break;
    default:
        classificacao = "Nota inválida";
}

console.log(classificacao);