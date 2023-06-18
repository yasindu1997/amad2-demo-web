var stdName = "Yasindu" //------> String
var age = 26; //34,56.7 //-------> number
var isMarreid = true //boolean


//variables ---> var, let, const

var val0 = 12;
var val0 = 45;

/*let val1 = 34;
let val1 = 90;*/

/*const val3 = 34;
const val3=78;*/

///////////////////////

var val4 = 45;
val4 = 90;

let val5 = 65;
val5 = 34;

/*const val6 = 89;
val6=12;*/

///////////////////////

//var is globle scope

var val7 = 23;

{
    console.log(val7);
    var val8 = 56;
}

console.log(val8);

//let is block scope

/*let val9 = 12;

{
    console.log(val9);
    let val10 = 90;
}

console.log(val10);*/

//const is block scope

/*const val11 = 12;

{
    console.log(val11);
    const val12 = 90;
}

console.log(val12);*/

/////////////////////////////

function saveData() {

}

saveData();

////////////////////////////


function deleteData(name) {
    console.log("Hiiii " + name);
}

deleteData("Kasun");

function login(email, password) {

}

login("yasindu@gmial.com", "yasindu123")

///////////////////////////////

function sumData(num1, num2) {
    return num1 * num2;
}

var result = sumData(5, 4);
console.log(result);

/////////////////////////////

const updateData = function () {

}

updateData();

//arrow function ---> usage

const loadData = () => {

}

loadData();

/////////////////////////////

//oop ---> object oriented programming

const objSithara = {
    name: "sithira rathanayaka", age: 25, address: "panadura",
    favFood: "milk rice", favDrink: "milk", isSmoke: true
}

//json object

/*{
   "name":"yasindu",
   "address":"panadura"
}*/

//arrays

const cars = ["Toyota", "BMW", "Jeep", "Mazda", "Honda",87]
console.log(cars);

const marks = [];

marks[0] = 45.6;
marks[1] = 90.3;

console.log(marks);

//////////////////////////

//for-each ----> arrays

for(const val of cars){
    console.log(val)
}

for(const val in cars){
    console.log(val)
}

//////////////////////////









