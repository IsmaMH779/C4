let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Mayor = [];

for (let i = 0; i < array.length; i++) {

    if (array[i] > 5) {
        Mayor.push(array[i])
    }
}

console.log(Mayor)
