

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];


const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
    console.log(humanAges);
    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);
    // const average = adults.reduce((acc, age) => age + acc, 0) / adults.length;
    const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return average;
}
const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(age1, age2);






