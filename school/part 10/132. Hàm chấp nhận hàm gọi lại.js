



const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}
const upperForstWord = function (str) {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}
transformer('javascript is the best programming', upperForstWord);
transformer('javascript is the best programming', oneWord);
const high5 = function(){
    console.log('emuiuanhnt');
}
document.body.addEventListener('click', high5);
['anhnt', 'linklink', 'emiuanhnt'].forEach(high5);