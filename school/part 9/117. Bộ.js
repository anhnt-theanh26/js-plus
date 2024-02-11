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
console.log(orderSet);
console.log(orderSet.size);
console.log(new Set('emuianhnt'));
console.log(orderSet.has('pizza'));
console.log(orderSet.has('cứt'));
orderSet.add('jun xào');
orderSet.add('jun xào');
orderSet.delete('risotto');
// orderSet.clear(); xóa toàn bộ
console.log(orderSet);
for (const item of orderSet) {
    console.log(item);
}

const staff = ['cook', 'waiter', 'manage', 'chef', 'cook', 'cook', 'waiter'];
const staffUnique = new Set (staff);
const staff2 = [...new Set (staff)];
console.log(staff);
console.log(staff2);
console.log(staffUnique);
console.log(staff2[3]);

console.log(new Set (['cook', 'waiter', 'manage', 'chef', 'cook', 'cook', 'waiter']).size);
console.log(new Set ('emuianhnt').size);








console.log('emuianhnt');