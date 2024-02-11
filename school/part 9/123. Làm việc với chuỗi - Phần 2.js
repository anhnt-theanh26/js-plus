

const airline = 'Viet Nam airline';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const khach = '  tHe ANh';
const passenger = khach.toLowerCase().trim();
const passengerToLower = passenger[0];
const passengerCorrect = passengerToLower.toUpperCase() + passenger.slice(1);
console.log(passengerCorrect);

const email = 'anhnt@gmail.com';
const loginEmail = '    anHnt@gmAil.com      \n';
const lowerEmaill = loginEmail.toLowerCase();
const trimMedEmaail = lowerEmaill.trim();
console.log(trimMedEmaail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

if (trimMedEmaail === email)
    console.log('ok');
else
    console.log('not ok');

const priceGB = '288.97$';
const priceVND = priceGB.replace('$', 'VND').replace(',', '.');
console.log(priceVND);

const announcement = 'tat ca hanh khach len cua so 23. cua so 23';
// console.log(announcement);
// console.log(announcement.replace('cua', 'cong'));
// console.log(announcement.replaceAll('cua', 'cong'));
console.log(announcement.replace(/cua/g, 'cong'));

const plane = 'Airbus A320emuianhnt';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A320'));

if(plane.startsWith('Air') && plane.endsWith('anhnt'))
console.log('phai');
else
console.log('deo phai');

const checkBaggage = function(item){
    const baggage = item.toLowerCase();
    if(baggage.includes('dao') || baggage.includes('sung')){
        console.log('may dell duoc len may bay');
    }else{
        console.log('moi quy khach len may bay');
    }
}
checkBaggage('Thit ga xong khoi, trung ga');
checkBaggage('Dao, Nia');
checkBaggage('Toi co mang theo khau sung de bao ve ban than');
