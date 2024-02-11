const question = new Map([
    ['question', 'what is the best programming language in the world?'],
    [1, 'PHP'],
    [2, 'Java'],
    [3, 'Python'],
    [4, 'SQL'],
    [5, 'JavaScript'],
    [6, 'Ruby'],
    ['correct', 5],
    [true, 'exaclly'],
    [false, 'wrong'],
]);


console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number'){
        console.log(`${key}: ${value}`);
    }
}
const answer = Number(prompt('Your answer'));
console.log(answer);
const hihi = answer === question.get('correct');
console.log(question.get(hihi));