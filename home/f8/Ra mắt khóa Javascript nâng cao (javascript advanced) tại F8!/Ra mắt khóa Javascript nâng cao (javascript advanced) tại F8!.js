// iife
// let i = 1;
// ;(function callNow(){
//     i++;
//     console.log('message:', i);
//     if(i<10) 
//         callNow();
// })();
// ;(function callNow(){
//     console.log('message:', 'anhnt');
// })();

const app = (function(){
    const cars = [];
    return {
        get(index){
            return cars[index];
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index, car) {
            cars.splice(index, 1);
        },
    };
})();