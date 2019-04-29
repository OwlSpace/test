'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money =="" || money==null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();


console.log(money);
//console.log(time);


//var object = {};

let appData = {
    mon: money,
    tim: time,
    expenses : {},
    optionalExpenses:{},
    income:[],
    savings: false
};

//let sum = money/30;


function chooseExpenses() {
    for (let i=0; i<2; i++) {
        let a = prompt("Введите обезательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойтется");

    if ( typeof(a) === 'string' && typeof(a) != 'null' && typeof(b) != 'null' && a != '' && b != '' && a.length<50 ){
        appData.expenses[a] = b;
    } else {
        // дописать 
        i = i - 1;
    }
   // console.log(appData.expenses);
           
    }
}

chooseExpenses();



// функция определения необязательных расходов
function chooseOptExpenses() {
    for (let i=1; i<4; i++){
        let n = prompt("Статья не обязательных расходов");
        appData.optionalExpenses[i] = n;
        
    }
}
//chooseOptExpenses();





function detectDayBudget() {
appData.monePerDay = (appData.mon/30).toFixed();
alert("Бюджет на 1 день" + appData.monePerDay);
}
detectDayBudget();



function detectLevel() {
    if (appData.monePerDay < 100 ) {
        console.log('минимальный');
    } else if (appData.monePerDay > 100 && appData.monePerDay < 2000){
        console.log('средний');
    } else if (appData.monePerDay > 2000) {
        console.log('высокий');
    } else {
        console.log('ошибка');
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита:" + appData.monthIncome);

    }
}
checkSavings();