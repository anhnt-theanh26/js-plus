console.log('a very nice string'.split(' '));
console.log('EM UI ANH NT'.split(' '));
const [lastName, ...firstName] = 'nguyen the anh'.split(' ');
console.log(lastName);
console.log(firstName);
const newName = ['Mr.', ...firstName, lastName.toUpperCase()].join(' ')
console.log(newName);
const capitalozaName = function (name) {
    const names = name.trim().split(' ');
    const namesUpper = [];
    // for (const n of names) {
    //     namesUpper.push(n[0].toUpperCase() + n.slice('1'));
    // }
    // names.forEach(element => {
    //     namesUpper.push(element[0].toUpperCase() + element.slice('1'));

    // });
    for (const n of names) {
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper);
}
capitalozaName('em ui anh nt');
capitalozaName('     em ui anh');




const messenger = 'di den cua so 23! ';
console.log(messenger.padEnd(25, 'let go '));
console.log(messenger.padStart(30, '+').padEnd(40, '+'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
    // console.log(last.padStart(str.length, '*'));
}

console.log(maskCreditCard('12345678909876543'));
console.log(maskCreditCard(123456789056789));
console.log(maskCreditCard(23456789));

const messengers = 'bab weather ..... Stop all FLIGHT ';

console.log(messengers.repeat(5));

const planeInline = function(n){
    console.log(`co ${n} chuyen bay doi cat canh ${'flight'.repeat(n)}`);
}


planeInline(4)
planeInline(32)
planeInline(12)









