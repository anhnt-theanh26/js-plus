




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToDollar = 1.1;

console.log(movements);

const movementsUSD = movements.map(function (j) {
    return j = j * euroToDollar;
});


console.log(movementsUSD);

const newMovements = movements.map(mov => mov * euroToDollar);
console.log(newMovements);


const arrNew = [];
for (const mov of movements) arrNew.push(mov * euroToDollar);
console.log(arrNew);


const movementsDescriptions = movements.map((mov, i) => `tài khoản được ${mov > 0 ? 'cộng' : 'trừ'}: ${Math.abs(mov)}`);

console.log(movementsDescriptions);







