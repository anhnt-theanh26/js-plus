


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const deposits = movements.filter(function (mov) {
    return mov > 0;
});
console.log(movements);
console.log(deposits);
const newarrr = [];
for (let i = 0; i < movements.length; i++) {
    if (movements[i] > 0)
        newarrr.push(movements[i]);

}
console.log(newarrr);
const withdrawals = movements.filter(mow => mow < 0);
console.log(withdrawals);