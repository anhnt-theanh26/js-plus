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
// console.log(restaurant.openingHours);

if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.thu?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`on ${day} we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Phuong thuc khong ton tai');

const userArr = [
    { name: 'hihi', email: 'hihi@gmail.com', },
    { name: 'haha', email: 'haha@gmail.com' }
];
console.log(userArr[0]?.name ?? 'nguoi dung rong');
for (let i = 0; i < userArr.length; i++) { 
    if (userArr)
        console.log(userArr[i]?.name)
    else
        console.log('nguoi dung rong');
}