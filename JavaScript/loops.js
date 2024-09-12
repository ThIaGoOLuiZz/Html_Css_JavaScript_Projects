for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("-----");

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("-----");

let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}

console.log("-----");

for (let k = 0; k <= 100; k++) {
    if (k === 50) {
        console.log("Loop interrompido ao chegar no número 50.");
        break;
    }
    console.log(k);
}

console.log("-----");

for (let l = 0; l <= 20; l++) {
    if (l === 13) {
        continue;
    }
    console.log(l);
}