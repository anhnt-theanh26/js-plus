



// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const julia = [9, 16, 6, 8, 3];
// const kate = [10, 5, 6, 1, 4];

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
]


// 1 tạo đối tượng khẩu phần ăn
// dogs.forEach(dog => {
//     dog.recFood = [dog.weight **0.75*28]
// });
dogs.map(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));


// 2 tìm kiếm chó có chủ sở hữu là Sarah
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`chó của Sarah ăn nhiều vl: \nmức ăn :${dogSarah.curFood} \nkhẩu phần ăn: ${dogSarah.recFood} \nquá: ${dogSarah.curFood - dogSarah.recFood}`);
console.log(`chó của Sarah ăn ${dogSarah.curFood > dogSarah.recFood ? 'nhiều vl' : 'không sao'}`);


// 3 tạo mảng chứa tất cả các chủ sở hữu của những con chó ăn quá nhiều
// const ownerEatTooMuch = dogs.filter(dog => dog.recFood > dog.curFood).map(dog => dog.owners).flat();
const ownerEatTooMuch = dogs.filter(dog => dog.recFood > dog.curFood).flatMap(dog => dog.owners);
console.log(ownerEatTooMuch);
// chủ các con chó ăn quá ít
const ownerEatTooLittle = dogs.filter(dog => dog.recFood < dog.curFood).flatMap(dog => dog.owners);
console.log(ownerEatTooLittle);


// 4 
// 'chó của MAtilda và Alice và bob ăn quá nhiều
// 'chó của MAtilda và Alice và bob ăn quá ít
console.log(`chó của ${ownerEatTooMuch.join(' và ')} ăn quá nhiều`);
console.log(`chó của ${ownerEatTooMuch.join(' và ')} ăn quá ít`);


// 5 tìm chó ăn chính xác lượng thức ăn khuyến nghị
console.log(dogs.some(dog => dog.curFood == dog.recFood));

// 6 tìm con chó ăn khẩu phần ăn ổn
// console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1)); // c1
const checkEating = dog => dog.recFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1; //c2
console.log(dogs.some(checkEating));


// 7 tìm những con chó ăn khẩu phần ăn ổn
console.log(dogs.filter(checkEating));


// 8 sắp xếp chó theo khẩu phần ăn
const dogSorter = dogs.slice().sort((a,b) => b.recFood - a.recFood);
console.log(dogSorter);

// console.log(dogs);