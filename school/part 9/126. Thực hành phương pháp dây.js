

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:24+_Arival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flight = flights.split('+');
// console.log(flight);

const getCode = str => str.slice(0, 3).toUpperCase()

for (const [item, row] of flight.entries()) {
    const [type, from, to, time] = row.split(';');
    const output = `${type.startsWith('_Delayed') ? '@' : ''} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40);
    console.log(output);
}