// print with innerhtml
document.getElementById('total').innerHTML=(10+10);

// print with write function
document.write(10+30);

// print with console
// console.log(6+8);

// variable declear var
// var a = 10;
// var y = 20;
// var z = a + y;

// console.log(z);

// variable declear let

// let x = 10;
// console.log(x);

// js function
// function sleep(){

// }

// sleep();

// if(true){
//     var alam = 100;
//     console.log(alam);
// }

// console.log(alam);

// carName = "track";

// let carName;

// console.log(carName);

// {
//     let talha = "hi";
//     let faruk = "hello";

//     console.log(talha);


// }

// const public = 100;
// public = 100;
// console.log(public);

// var age = 10;
// age = 20;
// console.log(age);

// let tasrif = 'brother';
// let nafi = 'bagina';

// let total = tasrif + " " + nafi;

// console.log(total);

// let kaka = 29 % 9;

// console.log(kaka);


// Object

// const car = {
//     name: "volvo",
//     brand : "ak47",
//     weight : "500kg",
//     model: 300,
//     start: function(){
//         console.log("car is start");
//     },
//     drive : function(){
//         console.log("car is driving");
//     }
// }
// console.log(car["name"]);
// console.log(car.name)
// alert(car["brand"]);
// console.log(car.brand);
// console.log(car['brand']);
// car.start();

// function sayHi(){
//     console.log(name);
//     console.log(age);
//     var name = "atik";
//     let age = 21;
// }

// sayHi();

// string langth

// let text = "sdwerujkcnvwejhrojskfaoeir";
// console.log(text.size);

// let f = "John";
// let k = new String("John");

// // console.log(f == k);
// console.log(f === k);

// if(window.performance.navigation.type == 0){
//     alert('loaded');
// }
// window.onload = function() {
//     alert("Do you want reload successfully...");
// };

// let str = 'b'+ 'a' +  + 'a' + 'a';

// console.log(str)

// const five = "5";

// const tow = 2;

// const text = `five + two = ${five + tow} but five - two = ${five - tow}`;
// console.log(text);

// console.log(typeof NaN);

// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;
// console.log(typeof cars);

// array itaretion

// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log("-----------");
// }
//array . foreach()

// numbers.forEach(myFunction);

// array itaretion

// const numbersmap = [45, 4, 9, 16, 25];

// function myFunctionMap(value) {
//     return value * 2;
// }
// //array . foreach()

// const MapNewNumbers = numbersmap.map(myFunctionMap);

// console.log(MapNewNumbers);
// const numbersfilter = [45, 4, 9, 16, 25];

// function myFunctionfilter(value) {
//     return value > 10;
// }
// //array . foreach()

// const filterNewNumbers = numbersfilter.filter(myFunctionfilter);

// console.log(filterNewNumbers);


// const numbers = [45, 4, 9, 16, 25];

// function myFunction(total , value , index , array) {
//     console.log(total);
//     console.log("----");
//     return total + value;
// }
// //array . foreach()

// const NewNumbers = numbers.reduce(myFunction);

// console.log(NewNumbers);
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(total , value , index , array) {
//     console.log(total);
//     console.log("----");
//     return total + value;
// }
// //array . foreach()

// const NewNumbers = numbers.reduceRight(myFunction);

// console.log(NewNumbers);
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value , index , array) {
//     return value > 1;
// }
// //array . foreach()

// const NewNumbers = numbers.every(myFunction);

// console.log(NewNumbers);
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value , index , array) {
//     return value > 18;
// }
// //array . foreach()

// const NewNumbers = numbers.some(myFunction);

// console.log(NewNumbers);

// const numbers = [45, 4, 9, 16, 25];

// const position = numbers.indexOf(45)+1;
// console.log(position);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }   

// console.log(first);

// let array_print = Array.from('ABCDEFG');

// console.log(array_print);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.sort(function(a,b) {return a-b});
// console.log(keys);

// const arr = [4, 9, 16, 25, 29];

// console.log(arr.sort(function(a, b){return a - b}));

// ============================= js date =============================

// const d = new Date('2020-01-01')
// const d1 = new Date('2020-01-01T00:00')

//     console.log(d.getFullYear(),d1.getFullYear())


// const numbers = [4,9,16,25,29];

// let first = numbers.find(function(value){
//     return value > 18;
// });

// console.log(first);

// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if(someday < today){
//     console.log('true');
// }else{
//     console.log('false');
// }
// console.log(today,someday);

// js math
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.trunc(4.5));
// console.log(Math.sign(4.5));


// console.log(Math.pow(4,2));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-64));
// console.log(Math.sin(90 * Math.PI / 180));
// console.log(Math.min(90,100,30,40));
// console.log(Math.max(90,100,30,40));
// console.log(Math.random());
// console.log(Math.log(10));
// console.log(Math.log2(8));
// console.log(Math.log10(8000));

// console.log(Math.floor(Math.random()*9999)+1)

// console.log(Math.floor(Math.Random() * 100) + 1);

// ========================Provlem solving ========================

// rendomly 1 to 6 print like ludu

function randomNumber(min,max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

console.log(randomNumber(1,6))


// class er student alphabetically show

const student = ["Shakil","Ohid","Anam","Faruk"];

console.log(student.sort());

// serial wise roll no show

const roll = ['2','6','4','30'];

console.log(roll.sort(function(a,b){
   return b-a;
}));

// leap year

function isLeapYear(year){
    if((year % 400 === 0 ) || (year % 4 === 0) && (year % 100 !== 0)){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`)
    }
}
isLeapYear(2028);

//one sentence total vawole 

const vawole = ['a','e','i','o','u','A','E','I','O','U'];

function countVawoles(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vawole.includes(value)){
            count++;
        }
    });
    
    return count;

}

console.log(countVawoles("I love Bangladesh"))

// how to search duplicate value in array

const numbers = [1,2,3,4,5,6,7,8,9,0,4,6,5];

const duplicate = numbers.filter(function(value, index, array ){
    return array.indexOf(value) !== index;
})

console.log(duplicate);

// how to search unique value in array

const unique = [1,2,3,4,5,6,7,8,9,0,4,6,5];

const uniques = numbers.filter(function(value, index, array ){
    return array.indexOf(value) === index;
})

console.log(uniques);