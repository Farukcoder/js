// print with innerhtml
document.getElementById('total').innerHTML=(10+10);

// print with write function
document.write(10+30);

// print with console
console.log(6+8);

// variable declear var
var a = 10;
var y = 20;
var z = a + y;

console.log(z);

// variable declear let

let x = 10;
console.log(x);

// js function
function sleep(){

}

sleep();

if(true){
    var alam = 100;
    console.log(alam);
}

console.log(alam);

// carName = "track";

// let carName;

// console.log(carName);

{
    let talha = "hi";
    let faruk = "hello";

    console.log(talha);


}

const public = 100;
// public = 100;
console.log(public);

var age = 10;
age = 20;
console.log(age);

let tasrif = 'brother';
let nafi = 'bagina';

let total = tasrif + " " + nafi;

console.log(total);

let kaka = 29 % 9;

console.log(kaka);


// Object

const car = {
    name: "volvo",
    brand : "ak47",
    weight : "500kg",
    model: 300,
    start: function(){
        console.log("car is start");
    },
    drive : function(){
        console.log("car is driving");
    }
}
console.log(car["name"]);
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

let text = "sdwerujkcnvwejhrojskfaoeir";
console.log(text.length);

let f = "John";
let k = new String("John");

// console.log(f == k);
console.log(f === k);