



// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const julia = [9, 16, 6, 8, 3];
// const kate = [10, 5, 6, 1, 4];


// const checkDog = function (arr) {
//     arr.forEach(function (i, j) {
//         const age = i < 3 ? 'cho con' : 'cho lon';
//         console.log(`con cho so ${j + 1} la ${age} voi so tuoi la: ${i}`);
//     });
// }

// checkDog(julia);
// checkDog(kate);

// const copyJulia = [...julia];
// console.log(julia);
// copyJulia.splice(0,1);
// copyJulia.splice(-1);
// console.log(copyJulia);

const checkDog2 = function (dog1, dog2) {
    const dogCopyJulia = dog1.slice();
    dogCopyJulia.splice(0, 1);
    dogCopyJulia.splice(-2);
    // dog1.slice(1, -2);
    // console.log(dogCopyJulia);
    const dogs = dogCopyJulia.concat(dog2);
    // console.log(dogs);
    dogs.forEach(function (i, j) {
        const age = i < 3 ? 'cho con' : 'cho trưởng thành';
        console.log(`con chó thứ ${j + 1} là ${age} với số tuổi là: ${i}`);
    });
}

checkDog2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDog2([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
