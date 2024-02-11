'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 12 + 12,
    },
};

const restaurant = {
    name: 'anhnt',
    location: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng'],
    categories: ['Món mặn', 'Món chay', 'Món ăn kiêng', 'Món đặc sản'],
    starterMenu: ['jun xào', 'đỉa luộc', 'cóc nấu đông', 'chuồn chuồn áp chảo', 'bọ hung hầm'],
    mainMenu: ['tiết canh', 'bịa', 'thắng cố'],



    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} se duoc gui den ${address} luc ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`day la mon my ngon cua ban gom co ${ing1} va ${ing2} va ${ing3}`);
    },
    orderPizza(mainInfgredient, ...ortherIngredient) {
        console.log(mainInfgredient);
        console.log(ortherIngredient);
    },
}


const orderSet = new Set([
    'pasta',
    'pizza',
    'pizza',
    'risotto',
    'pasta',
    'pizza',
]);




const rest = new Map();
rest.set('name', 'anhnt');
rest.set(1, 'son dong');
rest.set(2, 'dai thanh');
rest.set('categories', ['Món mặn', 'Món chay', 'Món ăn kiêng', 'Món đặc sản'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open')
    .set(false, 'we are colsed');
console.log(rest.get('name'));
// console.log(rest.get(true));
const time = 21;

console.log(time > rest.get('open') && time < rest.get('close') ? rest.get(true) : rest.get(false));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'test');

console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(new Set('emuianhnt'));