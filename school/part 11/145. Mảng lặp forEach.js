

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




console.log('');

movements.forEach(element => {
    if (element > 0) {
        console.log(`tài khoản được cộng: ${element}`);
    } else {
        console.log(`tài khoản đã trừ: ${element}`);
    }
});
console.log('');
for (let i = 0; i < movements.length; i++) {
    if (movements[i] > 0) {
        console.log(`tài khoản được cộng: ${movements[i]}`);
    } else {
        console.log(`tài khoản đã trừ: ${movements[i]}`);
    }
}

console.log('');

for (const [item, value] of movements.entries()) {
    if (value > 0) {
        console.log(`${item + 1} tài khoản được cộng: ${value}`);
    } else {
        console.log(`${item + 1} tài khoản đã trừ: ${value}`);
        console.log(`${Math.abs(value)}`);
    }
}

movements.forEach(function(i,j) {
    console.log(i);
    console.log(j);
});



