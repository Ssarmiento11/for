let acumuladora = 0;
let contador = 1;
for (let index = 0; index < 100; index++) {
    console.log(acumuladora);
    acumuladora +=contador
}
for (let index = 100; index > 0; index--) {
    acumuladora -=contador
    console.log(index);
}
