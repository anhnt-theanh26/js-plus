


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const rows = text.toLowerCase().split('\n');
//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.trim().split('_');
//         // console.log(first + second[0].toUpperCase() + second.slice(1));
//         const output = `${first}${second[0].toUpperCase()}${second.slice(1)}`;
//         console.log(`${output.padEnd(30, '-')} ${'V'.repeat(i+1)}`);
//     }
// });


document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.toLowerCase().split('\n');
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.trim().split('_');
        const output = `${first}${second[0].toUpperCase()}${second.slice(1)}`;
        console.log(`${output.padEnd(20, '_')}${'V'.repeat(i+1)}`);
    }
});

// underscore_case
//         first_name
//     Some_Variable
// delayed_departure
