'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//1
const bankDepositSum = accounts.map(acc => acc.movements).flat().filter(mov => mov > 0).reduce((mov, i, _, arr) => mov + i, 0);
console.log(bankDepositSum);
const bankDepositSum2 = accounts.flatMap(acc => acc.movements).filter(mov => mov < 0).reduce((mov, i, _, arr) => mov + i, 0);
console.log(bankDepositSum2);


//2
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    // .reduce((mov, i) => i >= 1000 ? mov + 1 : mov, 0);
    .reduce((mov, i) => i >= 1000 ? ++mov : mov, 0);
console.log(numDeposits1000);


//3
const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    return sums;
}, { deposits: 0, withdrawals: 0 });
console.log(sums);

const sums2 = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
}, { deposits: 0, withdrawals: 0 });
console.log(sums2);


const convertTitleCase = function (title) {
    const capitzalize = str => str[0].toUpperCase()+str.slice(1);
    const expections = ['a', 'an', 'in', 'but'];
    const titleCase = title.toLowerCase().split(' ')
    .map(word => expections.includes(word) ? word : capitzalize(word)).join(' ');

    return capitzalize(titleCase)
}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title'));