const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            "Brandt",
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:00',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th,2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const scored = game.scored;
for (const [i, j] of scored.entries()) {
    console.log(`${i + 1}: ${j}`);
}

//2
let average = 0;
const odds = Object.values(game.odds);
for (const i of odds) {
    average += i;
}
average /= odds.length;
console.log(average);


//3 
for (const [i,j] of Object.entries(game.odds)) {
     const teamStr = i === 'x' ? 'draw' : `victory ${game[i]}`
    console.log(`Odd of ${teamStr} : ${j}`);
}

