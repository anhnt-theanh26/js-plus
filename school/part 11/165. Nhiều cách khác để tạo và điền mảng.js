



const account1 = {
    owner: 'aa',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interresRate: 1.2,
    pin: 1111,
}

const account2 = {
    owner: 'bb',
    movements: [500, 3400, -150, -790, -3210. - 1000, 8500, -30],
    interresRate: 1.5,
    pin: 2222,
}
const account3 = {
    owner: 'cc',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interresRate: 1,
    pin: 4444,
}


const account4 = {
    owner: 'dd',
    movements: [430, 1000, 700, 50, 90],
    interresRate: 0.7,
    pin: 3333,
}

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




const arr = [1, [2, [3]], 4, 5, 6, 7, 8];
// arr.fill(2, 3, 5);
// console.log(arr);
// console.log(new Array(1, 2, 3, 4, 5, 6));
// const x = new Array(7);
// console.log(x);
// x.fill(1, 3, 5);
// console.log(x);
// x.fill(1)

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// const i = Array.from({ length: 100 }, (_i) => Math.floor(Math.random() * 100));
// console.log(i);

const movUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movUI);

console.log(arr.flat(1));
const a = 'a a a ';
const b = 'avf f';
console.log(a.concat(b));
console.log(a.split(' '));

console.log(arr.flat(2).every(item => item > 0));





