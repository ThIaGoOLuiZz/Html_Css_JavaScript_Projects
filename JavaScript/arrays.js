let animais = [];
animais.push("Cachorro");
animais.push("Gato");
animais.push("Elefante");
console.log("Array após adicionar animais:", animais);

animais.shift();
console.log("Array após remover o primeiro animal:", animais);

animais.unshift("Leão", "Tigre");
console.log("Array após adicionar dois novos animais no início:", animais);

animais[1] = "Girafa";
console.log("Array após alterar o segundo elemento para 'Girafa':", animais);

let frutas = ["Maçã", "Banana", "Laranja"];
console.log("Número total de frutas no array:", frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i]);
}