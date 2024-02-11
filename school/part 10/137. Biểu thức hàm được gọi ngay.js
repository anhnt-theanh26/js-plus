






const runOne = function () {
    console.log('emiuanhnt');
};
runOne();
; (function () {
    console.log('emiuanhnt');
    const isPrivate = 20;
})();

// console.log(isPrivate);

; (() => console.log('this will also never run aglain'))();

{
    const isPrivate = 20;
    var notPrivate = 20;
}
console.log(notPrivate);
console.log(isPrivate);



