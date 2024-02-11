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
}


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log('badNewArr: ' + badNewArr);
const newArr = [1, 2, ...arr];
console.log('new arr: ' + newArr);
const newMenu = ['trung ran', 'rau luoc', ...restaurant.mainMenu];
console.log(...newMenu);

// sao chep array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);


// noi 2 arr
const menu = [...mainMenuCopy, ...restaurant.categories];
console.log(menu);


// lap lai mang, chuoi, ban do, tap hop. nhung khong phai la doi tuong
const str = 'linh';
const letters = [...str, ' ', 'anhnt'];
console.log(letters);


// ví dụ trong thế giới thực phẩm
// const indredients = [
//     prompt("let\'s make pasta ! ingredients 1"),
//     prompt('ingredients 2'),
//     prompt('ingredients 3'),
// ];
// restaurant.orderPasta(indredients[0], indredients[1], indredients[2])
// restaurant.orderPasta(...indredients);



//
const newRestaurant = {
    'năm sáng lập': '2029',
    ...restaurant,
    'người sáng lập': 'tâp đoàn VAC', 
};

console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'linhdth';
console.log(restaurant.name);
console.log(restaurantCopy.name);