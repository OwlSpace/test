 'use strict'
/*
//console.log(leftBorderWidth);

var leftBorderWidth = 1;
let second = 2; 
const pi = 3.14;

//console.log(second);
//console.log('string'/9);
 let persone = {
     name: "John", 
     age: 25,
     isMarried: false
 };


// console.log(persone["name"]);


 let arr = ['plum.png','orange.jpg','apple.bmp'];

 //console.log(arr[2]);

 //alert("Hello Word!");

// let answer = confirm("polsovatel?");
 //console.log(answer);

 let answer = prompt("Est vosemnadsat?" , "Da");
 //console.log(typeof(arr));

//console.log("arr" + "- object");


/* let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);

console.log("2" === 2);  
let isChecket = true,
    isClose = true;

console.log(isChecket && isClose); */


/* if (2*4 == 7) {
    console.log("верно!");
} else {
    console.log("не верно!");
} */



/* if (num < 49) {
    console.log("не верно");
} else if (num > 100){
    console.log("много");
} else{
    console.log("верно");
};
 */

//(num == 50) ? console.log("верно") : console.log("не верно");

/* switch (num){
    case num < 49: 
        console.log("не верно");
        break;
    case num > 100:
        console.log("много");
        break;
    case 50:
        console.log("верно");
        break;
    default:
        console.log("что то не так");
        break;
} */



/* while (num < 55 ){
     console.log(num);
     num++;
}
 */

/* do {
    console.log(num);
    num++;
} while(num < 55) */

/* 
var num = 50;

for(let i=1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

console.log(2 && 3); */

function first(){
    setTimeout( function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, calback){
    console.log("Я учу " + lang);
    calback();
}

learnJS("JavaScript", function(){
    console.log("Я прошел урок");
})

