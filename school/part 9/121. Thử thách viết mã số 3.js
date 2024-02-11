
const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substutition'],
    [47, 'Yellow card'],
    [61, 'Substutition'],
    [69, 'Red card'],
    [64, 'Yellow card'],
    [70, 'Substutition'],
    [72, 'Substutition'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow card'],
]);


//1 
const events = new Set(gameEvents.values());
console.log(events);
const arr = [...gameEvents];
console.log(arr);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
const time = [...gameEvents.keys()].pop();
console.log(`cứ mỗi ${time / gameEvents.size} phút lại có 1 sự kiện`);

// 4
for (const [key, value] of gameEvents) {
    game = key <= 45 ? 'hiep1' : 'hiep2';
    console.log(`sự kiện ${value} ở phút ${key} diễn ra ở ${game}`);
}


