/*
Задача 0. Обчислити значення виразів
*/ 
let a = parseInt(prompt('a=', '0'));
let b = parseInt(prompt('b=', '0'));
const KNOWN_VALUE = 12;

// ====================================================================================

let s1 = a + KNOWN_VALUE + b;

document.write(`<div class="wrapper"> <div class="page__container"> s1 = ${s1}`);

// ====================================================================================

let s2 = Math.sqrt((a + b) / (2 * a));
document.write(`<div class="page__container"> s2 = ${s2}`);

// ====================================================================================
let c = parseInt(prompt('c=', '0'));
let s3 = Math.cbrt((a + b)* c);
document.write(`<div class="page__container"> s3 = ${s3}`);

// ====================================================================================

let s4 = Math.sin(a / (-b));
document.write(`<div class="page__container"> s4 = ${s4}`);