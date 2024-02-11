
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
const labeWelcome = document.querySelector('.welcome');
const labeDate = document.querySelector('.date');
const labeBalance = document.querySelector('.balance__value');
const labeSumIn = document.querySelector('.summary__value--in');
const labeSumOut = document.querySelector('.summary__value--out');
const labeSumInterrest = document.querySelector('.summary__value--interesr');
const labeTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'EURO'],
    ['GBP', 'Pound sterling'],
]);










