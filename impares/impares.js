let n = parseInt(prompt("Ingrese la cantidad de veces que quiere que usted desee"));
let contador = 1;

for (let index = 1; index <= n; index++) {
    if (contador %2 != 0) {
         
        console.log("impar ", contador);
    }
    contador +=1;
}