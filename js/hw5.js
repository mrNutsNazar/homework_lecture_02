/* Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.*/

let numberOfSeconds = parseInt(prompt("Кількість секунд", 0));

let hours = Math.floor(numberOfSeconds / 3600);
let minutes = Math.floor((numberOfSeconds % 3600) / 60);

document.write(`<div class="page__container"> ${hours} год ${minutes} хв`);
