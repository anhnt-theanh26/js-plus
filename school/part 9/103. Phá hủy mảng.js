'use strict';
const restaurant = {
    name: 'anhnt',
    location: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng'],
    categories: ['Món mặn', 'Món chay', 'Món ăn kiêng', 'Món đặc sản'],
    starterMenu: ['jun xào', 'đỉa luộc', 'cóc nấu đông', 'chuồn chuồn áp chảo', 'bọ hung hầm'],
    mainMenu: ['tiết canh', 'bịa', 'thắng cố'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// chuyển đổi các biến
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// console.log(temp);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(1, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j]= nested;
// console.log(i,j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);