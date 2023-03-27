let numero = parseInt(prompt("Ingrese el numero de asteriscos que desee"));
let acumuladora = "";
let asteriscos = "*";
for (let index = 1; index <= numero; index++) {
    console.log(acumuladora);
    acumuladora+= asteriscos
    console.log(acumuladora);
}
for (let index = numero; index > 0; index--) {
    console.log(acumuladora);
    acumuladora-=asteriscos
    console.log(acumuladora);


}