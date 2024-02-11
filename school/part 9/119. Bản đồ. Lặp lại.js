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





const question = new Map([
    ['question', 'what is the best programming language in the world?'],
    [1, 'PHP'],
    [2, 'Java'],
    [3, 'Python'],
    [4, 'SQL'],
    [5, 'JavaScript'],
    [6, 'Ruby'],
    ['correct', 5],
    [true, 'exaclly'],
    [false, 'wrong'],
]);
console.log(question);
console.log(question.get('name'));
console.log(Object.entries(openingHours));


const hourMap = new Map(Object.entries(openingHours));
console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number'){
        console.log(`${key}: ${value}`);
    }
}

// const answer = Number(prompt('Your answe'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

const arr = [...question];
console.log(arr);




