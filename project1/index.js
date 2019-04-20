'use strict'


let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

console.log(money);
console.log(time);


//var object = {};

let appData = {
    mon: money,
    tim: time,
    expenses : {
        a1: prompt("Введите обезательную статью расходов в этом месяце"),
        a2: prompt("Во сколько обойтется")
    },
    optionalExpenses:{},
    income:[],
    savings: false
};

let sum = money/30;
alert("Бюджет на 1 день" + sum);