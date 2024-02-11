




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));

console.log(arr.slice());
console.log([...arr]);


// splice cắt và trả lại phần tử cắt
console.log(arr.splice(-1));
// console.log(arr.splice(1, 3));
arr.splice(1, 2);
console.log(arr);

// reverse 
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat

const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr,...arr2);

console.log(letters.join('-'));