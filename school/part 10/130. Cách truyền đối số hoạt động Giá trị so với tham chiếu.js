

const flight = 'LH234';
// console.log(flight.slice(0, 1));
const anhnt = {
    name: 'anhnt',
    passport: '1234567890',
}
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === '1234567890') {
        alert('check in');
    } else {
        alert('wrong passport');
    }
}

checkIn(flight, anhnt);

console.log(flight);
console.log(anhnt);
const flightNum = flight;
const passenger = anhnt;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}


newPassport(anhnt);
checkIn(flight, anhnt);
console.log(flight);
console.log(anhnt);