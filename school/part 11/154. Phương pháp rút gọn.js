


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`${i}: ${acc}`);
    return acc + cur;
}, 0);
console.log(balance);

const balance2 = movements.reduce((acc, cur) => acc += cur, 0);
console.log(balance2);

var sum = 0;
for (const item of movements.values()) {
    sum += item;
    console.log(sum);
}


const maxBalance = movements.reduce((acc, mov) => {
    if (acc > mov)
      return acc;
    else
      return mov
  }, movements.at(0));
  console.log(maxBalance);