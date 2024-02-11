'use strict';
const restaurant = {
    name: 'anhnt',
    location: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng'],
    categories: ['Món mặn', 'Món chay', 'Món ăn kiêng', 'Món đặc sản'],
    starterMenu: ['jun xào', 'đỉa luộc', 'cóc nấu đông', 'chuồn chuồn áp chảo', 'bọ hung hầm'],
    mainMenu: ['tiết canh', 'bịa', 'thắng cố'],

    openingHour: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} se duoc gui den ${address} luc ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`day la mon my ngon cua ban gom co ${ing1} va ${ing2} va ${ing3}`);
    },
    orderPizza: function (mainInfgredient, ...ortherIngredient) {
        console.log(mainInfgredient);
        console.log(ortherIngredient);
    },
}


// sử dụng bất kỳ kiểu dữ liệu nào
// có thể trả về bất kỳ kiểu dữ liệu nào
// thực hiện đánh dấu ngắn mạch
console.log('-----OR-----');
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hi' || 23 || null);
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');

console.log(0 && 'jonas');
console.log('object' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
    restaurant.orderPizza('xúc xich', 'tương ớt', 'tương cà');
}

restaurant.orderPizza && restaurant.orderPizza('xúc xich', 'tương ớt', 'tương cà');

