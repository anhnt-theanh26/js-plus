
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
// elements
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// some 
// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));