/*
Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
*/ 

let a = parseInt(prompt('a=', '0'));
let b = parseInt(prompt('b=', '0'));

let c = a + b;
let d = a * b;
let e = a / b;

document.write(`<div class="page__container">
<table>
<tr>
    <td>Число a = ${a};</td>
    <td>Число b = ${b};</td>
</tr>
<tr>
    <td>Сума</td>
    <td>Добуток</td>
    <td>Частка</td>
</tr>
<tr>
    <td>${c}</td>
    <td>${d}</td>
    <td>${e}</td>
</tr>
</table> </div>`);