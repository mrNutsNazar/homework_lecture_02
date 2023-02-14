/*
Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
1) Вартість одиниці товару
2) Кількість товару

Загальна сумма товару + ПДВ (5% від загальної вартості).
*/

let сostOfGoods = parseInt(prompt('Введіть вартість одиниці товару=', '0'));
let quantityOfGoods = parseInt(prompt('Введіть кількість товару=', '0'));

let totalCost = сostOfGoods * quantityOfGoods;
document.write(`<div class="page__container"> Загальна вартість товару = ${totalCost}`);


let tax = 0.05;
let totalTax = totalCost * tax;

document.write(`<div class="page__container"> ПДВ = ${totalTax}`);