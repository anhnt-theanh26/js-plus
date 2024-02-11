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



// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...orther] = [1, 2, 3, 4, 5];
// console.log(a, b, orther);

// const [tietcanh, , thangco, ...ortherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(tietcanh, thangco, ortherFood);

// const { sat, ...weekdays } = restaurant.openingHour;
// console.log(weekdays);

// const add = function (...numbers) {
//     // console.log(numbers);
//     let sum = 0;
//     for (let index = 0; index < numbers.length; index++) {
//         sum += numbers[index];
//     }
//     console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('xuc xich', 'hanh tay', 'ot chuong', 'tuong ca', 'tuong ot');
