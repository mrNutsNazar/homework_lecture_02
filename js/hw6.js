/*
Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару
окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
*/

let firstItem = parseInt(prompt('Введіть вартість першого товару=', '0'));
let quantityOfTheFirstItem = parseInt(prompt('Введіть кількість товару=', '0'));

let secondItem = parseInt(prompt('Введіть вартість другого товару=', '0'));
let quantityOfTheSecondItem = parseInt(prompt('Введіть кількість товару=', '0'));

let thirdItem = parseInt(prompt('Введіть вартість третього товару=', '0'));
let quantityOfTheThirdItem = parseInt(prompt('Введіть кількість товару=', '0'));

// ================================================================================

let totalFirstItem = firstItem * quantityOfTheFirstItem;
let totalSecondItem = secondItem * quantityOfTheSecondItem;
let totalThirdItem = thirdItem * quantityOfTheThirdItem;

let totalPrice = totalFirstItem + totalSecondItem + totalThirdItem;

let theTotalNumberOf = quantityOfTheFirstItem + quantityOfTheSecondItem + quantityOfTheThirdItem;

// ================================================================================

document.write(`<div class="page__container"> <table>
<tr>
    <td>Товар 1 --- </td>
    <td>Кількість - ${firstItem} --- </td>
    <td>Ціна - ${quantityOfTheFirstItem} --- </td>
    <td>Сума - ${totalFirstItem}</td>
</tr>
<tr>
    <td>Товар 2 --- </td>
    <td>Кількість - ${secondItem} --- </td>
    <td>Ціна - ${quantityOfTheSecondItem} --- </td>
    <td>Сума - ${totalSecondItem}</td>
</tr>
<tr>
    <td>Товар 3 --- </td>
    <td>Кількість - ${thirdItem} --- </td>
    <td>Ціна - ${quantityOfTheThirdItem} --- </td>
    <td>Сума - ${totalThirdItem}</td>
</tr>
</table>
<div class="page__container">Загальна сума - ${totalPrice}</div>
<div class="page__container">Загальна кількість товару - ${theTotalNumberOf}</div>
</div>`);