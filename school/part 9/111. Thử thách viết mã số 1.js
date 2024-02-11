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
        team1: 11.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const [player1, player2] = game.players;
console.log(player1, player2);

//2
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);
// const [gk1, ...fieldPlayer1] = player2;

//3
const allPlayer = [...player1, ...player2];
console.log(allPlayer);

//4
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

//5
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6
const printgoals = function (...players) {
    console.log(players);
    console.log(`${players.length} đã ghi bàn`);
}
// printgoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printgoals('Davies', 'Muller');
printgoals(...game.scored)

//7
team1 < team2 && console.log('team1 có khả năng chiến thắng hơn');
team1 > team2 && console.log('team2 có khả năng chiến thắng hơn');

console.log(team2 || team1 || draw);


