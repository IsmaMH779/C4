let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let par = [];
let impar = [];

for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 == 0) {
        par.push(array[i])
    }
    else {
        impar.push(array[i])
    }

}

console.log(par)
console.log(impar)