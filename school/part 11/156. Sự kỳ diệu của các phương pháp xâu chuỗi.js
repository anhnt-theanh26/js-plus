


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const euroToUsd = 1.1;
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * 1.1;
    })
    .reduce((arr, mov) => arr + mov, 0);
console.log(totalDepositsUSD);