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
}



restaurant.orderDelivery({
    time: '22:30',
    address: 'ha noi',
    mainIndex: 2,
    starterIndex: 2,
})


restaurant.orderDelivery({
    address : 'viet nam',
    starterIndex: 0,
})

const { name, openingHour, categories } = restaurant;
console.log(name, openingHour, categories);

const {
    name: restaurantName,
    openingHour: hour,
    categories: tags
} = restaurant;
console.log(restaurantName, hour, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let [a, b] = [111, 999];
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const { fri: { open: o, close: c } } = openingHour;
console.log(o, c);