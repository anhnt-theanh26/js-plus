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



const properties = Object.keys(openingHours);
console.log(properties);
let openStr = (`chung toi mo cua ${properties.length} ngay trong tuan `);
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);
console.log('value');
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`vao thu ${key} chung toi mo cua luc ${open}, dong cua luc ${close}`);
}

const a = Object.entries(openingHours);
console.log(a);
for (const [i, {open, close}] of a) {
    console.log(`vao ${i} mo cua ${open} dong cua ${close}`);
}