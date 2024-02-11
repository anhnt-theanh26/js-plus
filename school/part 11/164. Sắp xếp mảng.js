





const account1 = {
    owner: 'Nguyễn Thế Anh',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Ngụy Anh',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'A Tiện',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'EMIUANHNT',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//string
const owners = ['anhnt', 'atien', 'nguyanh', 'emiuanhnt'];
// console.log(owners.sort());
// console.log(owners);
// //number
// console.log(movements);
// console.log(movements.sort());

// console.log(movements.sort((a, b) => {
//     if (a > b) return 1
//     if (a < b) return -1
// }));
// console.log(movements.sort((a, b) => {
//     if (a > b) return -1
//     if (a < b) return 1
// }));
console.log(movements.sort((a,b)=>a-b));








