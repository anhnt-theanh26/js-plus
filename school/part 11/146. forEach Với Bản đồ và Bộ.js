
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'EURO'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}, ${value}`);
});

//set
const currenciesUnique = new Set(['euro', 'dollars', 'erk', 'erk']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}, ${value}`);
});