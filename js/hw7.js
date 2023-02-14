/*
Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
*/

let minMonth = 1;
let maxMonth = 12;
let monthRandom = minMonth + Math.floor(Math.random()*(maxMonth - minMonth +1));

// ================================================================================

let minDay = 0;
let maxDay = 6;
let dayRandom = minDay + Math.floor(Math.random()*(maxDay - minDay +1));

// ================================================================================

let sumRandom = monthRandom + dayRandom;

// ================================================================================

document.write(` <div class="page__container"> Випадковий місяць = ${monthRandom} </div> `);
document.write(` <div class="page__container"> Випадковий день = ${dayRandom} </div> `);
document.write(` <div class="page__container"> Сума випадкових дня та місяця  = ${sumRandom} </div> `);