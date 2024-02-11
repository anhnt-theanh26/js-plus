

const airline = 'Viet Nam airline';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('i'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('Nam'));

console.log(airline.slice(4,11));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+ 1));

console.log(airline.slice(airline.indexOf('N'), airline.lastIndexOf('n')));

const checkMiddleSeat = function(seat){
    // b vaf e laf ghees giwax
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E'){
        console.log('ban co 1 ghe giua');
    }else{
        console.log('chuc ban may man lan sau');
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(new String('emuianhnt'));
console.log(typeof new String('emuianhnt'));
console.log(typeof new String('emuianhnt').slice(1));
