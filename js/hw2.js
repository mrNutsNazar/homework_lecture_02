/*
Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
*/ 

let usersYearOfBirth = parseInt(prompt('Enter your year of birth=', '0'));
let thisYear = 2023;
let userAge = thisYear - usersYearOfBirth;

document.write(`<div class="page__container"> Current year = ${thisYear}`);
document.write(`<div class="page__container"> Year of your birth = ${usersYearOfBirth}`);
document.write(`<div class="page__container"> Your age = ${userAge}`);

