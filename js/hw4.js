/*
Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів. 
(рішення = поділити на 100 та на 1000)
*/

let lengthInCentimeters = parseInt(prompt('Довжина у сантиметрах=', '0'));

let meters = lengthInCentimeters / 100;
let kilometer = lengthInCentimeters / 100000;

document.write(`<div class="page__container"> Переведення в метри = ${meters}`);
document.write(`<div class="page__container"> Переведення в кілометри = ${kilometer}`);